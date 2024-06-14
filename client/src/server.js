const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { error } = require("console");

require("dotenv").config();

const app = express();
const port = 7000; // Using environment variables for configuration
app.use(cors());
app.use(bodyParser.json());

// It's recommended to use environment variables for sensitive information
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "majorpdb",
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});

const secretKey =
  process.env.JWT_SECRET || crypto.randomBytes(32).toString("hex"); // It's better to use a fixed secret in production

// State Data View 

app.get("/api/statedata/:cid", (req, res) => {
  // getting cid as pass parameter of api
  const { cid } = req.params;
  // console.log(cid);
  db.query("SELECT * FROM tblstate WHERE cid = ?", [cid], (err, results) => {
    if (err) {
      console.error("Error fetching state data:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// City Data View

app.get("/api/citydata/:sid", (req, res) => {
  // getting cid as pass parameter of api
  const { sid } = req.params;
  // console.log(sid);
  db.query("SELECT * FROM tblcity WHERE sid = ?", [sid], (err, results) => {
    if (err) {
      console.error("Error fetching state data:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});



app.post("/api/data/add", (req, res) => {
  const { sname, cid, surl, surlname, description } = req.body;
  const sql =
    "INSERT INTO tblstate (sname, cid, surl, surlname, description) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [sname, cid, surl, surlname, description], (err) => {
    if (err) {
      console.error("Error adding state data:", err);
      return res.status(500).json({ error: "Failed to add state data" });
    }
    res.json({ message: "State data added successfully" });
  });
});

// Login for User Code

app.post("/api/login", (req, res) => {
  const { email, pwd } = req.body;
  321
  const sql =
    `SELECT * FROM tbluser WHERE email = ? AND pwd = ?`;
  const values = [email, pwd];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.length > 0) {
        const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
        res.json({ result: results[0], token: token })

      } else {
        res.status(401).json({ error: "Incorrect Username or Password" });
      }
    }
  });
});

app.post("/api/glogin", (req, res) => {
  const { uid } = req.body;
  321
  const sql =
    `SELECT * FROM tblguider WHERE uid = ?`;
  const values = [uid];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(401).json({ error: "Incorrect Username or Password" });
      }
    }
  });
});

app.get("/api/countries", (req, res) => {
  db.query("SELECT * from tblcountry", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

// Countries Data View 

app.get("/api/country", (req, res) => {
  db.query("SELECT * from tblcountry limit 1,4", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

// Places Code 


app.get("/api/scity/:cityid", (req, res) => {
  const { cityid } = req.params;
  // console.log(cityid);
  db.query("SELECT * FROM tblcity WHERE cityid=?", [cityid], (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
      // console.log(results)
    }
  })
})


app.get("/api/profile/:uid", (req, res) => {
  const { uid } = req.params;
  // console.log(uid);
  db.query("SELECT * FROM tbluser WHERE uid=?", [uid], (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  })
})

// Sign Up

app.post("/api/data", (req, res) => {
  const { uname, pwd, email, status, reg_date_time, utype, url, urlname } = req.body
  const sql = "INSERT INTO tbluser (uname,pwd,email,status,reg_date_time,utype,url,urlname) VALUES (?,?,?,?,?,?,?,?)"
  const values = [uname, pwd, email, status, reg_date_time, utype, url, urlname]
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Insertion Error", err)
    }
    else {
      console.log("Data Inserted Successfully")
      res.json("Data Inserted Successfully")
    }
  })
})

// Update Profile

app.put("/api/editp/:uid", (req, res) => {
  const { uid } = req.params;
  const { uname, pwd, email, status, utype, url } = req.body;
  const sql = "UPDATE tbluser SET uname=?, pwd=?, email=?, status=?, utype=?, url=? WHERE uid = ?";
  const values = [uname, pwd, email, status, utype, url, uid];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      // res.json({ message: "Data Updated Successfully", results });
      db.query("SELECT * FROM tbluser WHERE uid=?", [uid], (err, results) => {
        if (err) {
          console.error(err);
        } else {
          res.json(results);
          // console.log(results)
        }
      })
    }
  });
});

// Category display 

app.get("/api/categorydata", (req, res) => {
  db.query("SELECT * from tblcategory", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

//Places

app.get("/api/places/view/:cityid", (req, res) => {
  const { cityid } = req.params;
  // console.log(cityid)
  const sql = `SELECT p.*,c.*, ct.*, ( SELECT AVG(rating) FROM tblreview r WHERE r.placeid = p.placeid) AS average_rating,(SELECT COUNT(*) FROM tblreview r WHERE r.placeid = p.placeid) AS review_count FROM tblplace p, tblcity c, tblcategory ct WHERE p.cityid = c.cityid AND p.category_id = ct.category_id   AND p.cityid = ? ORDER BY RAND();`;
  db.query(sql, [cityid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results)
    }
  })
})

app.get("/api/places/sview/:placeid", (req, res) => {
  const { placeid } = req.params;
  // console.log(cityid)
  const sql = "SELECT * FROM tblplace p, tblcity c, tblcategory ct WHERE p.cityid = c.cityid AND p.category_id = ct.category_id AND p.placeid = ? ";
  db.query(sql, [placeid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results)
      // console.log(results)
    }
  })
})

// Guider Forms 

app.post("/api/guiderAdd/:uid", (req, res) => {
  const { uid } = req.params;
  const { nick_name, cover_photo, bio, cityid, youtube_link, fb_link, insta_link, cover_urlname } = req.body;
  const qry = "INSERT INTO `tblguider`( `uid`, `nick_name`, `cover_photo`, `bio`, `cityid`, `youtube_link`, `fb_link`, `insta_link`, `cover_urlname`) VALUES  (?,?,?,?,?,?,?,?,?)";
  const values = [uid, nick_name, cover_photo, bio, cityid, youtube_link, fb_link, insta_link, cover_urlname];
  db.query(qry, values, (err, results) => {
    if (err) {
      console.error("Insertion Errors", err)
    } else {
      console.log(results);
      res.json("Data Inserted Successfully");
    }
  })
})

app.get("/api/getGuider/:uid", (req, res) => {
  const { uid } = req.params;
  const qry = "SELECT * FROM tblguider WHERE uid = ?"
  db.query(qry, [uid], (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results)
    }
  })
})

// Updating Vistor to Guider  

app.put("/api/updVistor/:uid", (req, res) => {
  const { uid } = req.params;
  const qry = 'UPDATE tbluser SET utype = "Guider" WHERE uid = ?'
  db.query(qry, [uid], (err, results) => {
    if (err) {
      console.error(err);
    }
    else {
      res.json(results);
    }
  })
})

// fetching city data for guider forms

app.get("/api/citydata", (req, res) => {
  db.query(
    "SELECT * FROM tblcity c,tblstate s where c.cityid=s.sid",
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        res.json(results);
        // console.log(results);
      }
    }
  );
});

// Vlog Forms 

app.post("/api/data/addvlog", (req, res) => {
  const { vurl, vurlname, vname, v_description, guiderid, date_time, vthumbnail, v_thumbnail_urlname } = req.body;
  const sql =
    "INSERT INTO tblvlog (vurl,vurlname,vname,v_description,guiderid,date_time,vthumbnail,v_thumbnail_urlname) VALUES (?, ?, ?, ?, ?, ?, ?,?)";
  db.query(sql, [vurl, vurlname, vname, v_description, guiderid, date_time, vthumbnail, v_thumbnail_urlname], (err) => {
    if (err) {
      console.error("Error adding state data:", err);
      return res.status(500).json({ error: "Failed to add state data" });
    }
    res.json({ message: "vlog data added successfully" });
  });
});

// app.get("/api/vlogprofile/:guiderid", (req, res) => {
//   const { guiderid } = req.params;
//   // console.log(uid);
//   db.query("SELECT * FROM tblguider WHERE guiderid = ?", [guiderid], (err, results) => {
//     if (err) {
//       console.error(err);
//     } else {
//       res.json(results);
//     }
//   })
// })

app.get("/api/vlogview", (req, res) => {
  // const {guiderid} = req.params;
  db.query("SELECT * FROM tblvlog v,tblguider g WHERE v.guiderid = g.guiderid ", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  })
})

app.post("/api/places/submitReview", (req, res) => {
  const { placeid, uid, rating, review, review_date_time } = req.body;
  const sql = "INSERT INTO tblreview (placeid, uid, rating, review, review_date_time) VALUES (?,?,?,?,?)";
  const values = [placeid, uid, rating, review, review_date_time];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Insertion Error:", err);
      res.status(500).json({ error: "Failed to insert review" });
    } else {
      console.log("Data Inserted Successfully");
      res.json({ message: "Review added successfully" });
    }
  });
});

// Guider Views 

app.delete("/api/reviewdelete/:rid", (req, res) => {
  const { rid } = req.params;
  db.query(`DELETE FROM tblreview WHERE reviewid = ?`, [rid], (err, result) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(result)
      console.log(result)
    }
  })
})

app.get("/api/guiderDisplay/:uid", (req, res) => {
  const { uid } = req.params
  db.query(`SELECT * 
  FROM tbluser u, tblguider g 
  WHERE u.uid = g.uid 
  AND u.utype = 'Guider' 
  AND u.uid NOT IN (SELECT uid FROM tblfollow WHERE followerid = ?)
  LIMIT 4`, [uid], (err, results) => {

    if (err) {
      console.error(err);
    }
    else {
      res.json(results);
    }
  })
})


// displaying reviews

app.get("/api/places/reviewDisplay/:placeid", (req, res) => {
  const { placeid } = req.params;
  db.query("SELECT * FROM tblreview r,tbluser u  WHERE r.uid = u.uid AND placeid = ?", [placeid], (err, results) => {
    if (err) {
      console.error(error);
    }
    else {
      res.json(results)
    }
  })
})

app.get("/api/displayPost/:uid", (req, res) => {
  const { uid } = req.params;
  db.query(`SELECT p.*, g.*, u.*
  FROM tblpost p
  JOIN tblguider g ON p.guiderid = g.guiderid
  JOIN tbluser u ON g.uid = u.uid
  WHERE p.guiderid IN (
      SELECT g.guiderid
      FROM tblguider g
      JOIN tblfollow f ON g.uid = f.uid
      WHERE f.followerid = ?
  )
  UNION
  SELECT p.*, g.*, u.*
  FROM tblpost p
  JOIN tblguider g ON p.guiderid = g.guiderid
  JOIN tbluser u ON g.uid = u.uid
  WHERE u.uid = ?`, [uid, uid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results)
    }
  })
})

app.post("/api/post/:guiderid", (req, res) => {
  const { guiderid } = req.params;
  const { post_title, post_cover, post_urlname, post_description, diary_id, post_date_time } = req.body; // Include post_description
  const sql = "INSERT INTO tblpost (post_title, post_cover, post_urlname, post_description, guiderid, diary_id, post_date_time) VALUES (?,?,?,?,?,?,?)";
  const values = [post_title, post_cover, post_urlname, post_description, guiderid, diary_id, post_date_time];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Insertion Error:", err);
      res.status(500).json({ error: "Failed to insert post" });
    } else {
      console.log("Data Inserted Successfully");
      res.json({ message: "Post added successfully" });
    }
  });
});

// app.post("/api/save", (req, res) => {
//   const { uid, postid } = req.body;
//   const sql = "INSERT INTO tblsave(uid,postid) VALUES (?,?)"
//   const values = [uid, postid]

//   db.query(sql, values, (err, results) => {
//     if (err) {
//       console.error("Insertion Error :", err);
//       res.status(500).json({ error: "Failed To Insert Post" })
//     }
//     else {
//       console.log("Data Inserted Successfully");
//       res.json({ message: "Post added successfully" });
//     }
//   })
// })

app.get("/api/guiderprofile/:gid", (req, res) => {
  const { gid } = req.params;
  db.query("SELECT * FROM tbluser u,tblguider g,tblcity c WHERE u.uid = g.uid AND g.uid = ? AND g.cityid = c.cityid", [gid], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

app.get("/api/vlogDisplay/:uid", (req, res) => {
  const { uid } = req.params;
  const qry = 'SELECT * FROM tblvlog v,tblguider g where v.guiderid=g.guiderid and v.guiderid=?'
  db.query(qry, [uid], (err, results) => {
    if (err) {
      console.error(err);
    }
    else {
      res.json(results);
    }
  })
})

app.delete("/api/vlogdel/:vlogid", (req, res) => {
  const { vlogid } = req.params;
  const sql = "DELETE FROM tblvlog WHERE vlogid = ?  ";
  const values = [vlogid];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err.message);
    } else {
      res.json({ message: "Data Deleted", results });
    }
  });
});

app.delete("/api/postdel/:postid", (req, res) => {
  const { postid } = req.params;
  const sql = "DELETE FROM tblpost WHERE postid = ?  ";
  const values = [postid];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err.message);
    } else {
      res.json({ message: "Data Deleted", results });
    }
  });
});

app.delete("/api/diarydel/:diary_id", (req, res) => {
  const { diary_id } = req.params;
  const sql = "DELETE FROM tbldiaries WHERE diary_id = ?  ";
  const values = [diary_id];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err.message);
    } else {
      res.json({ message: "Data Deleted", results });
    }
  });
});

app.get("/api/postDisplay/:uid", (req, res) => {
  const { uid } = req.params;
  const qry = 'SELECT * FROM tblpost p,tblguider g where p.guiderid=g.guiderid and p.guiderid=?'
  db.query(qry, [uid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results);
    }
  })
})

app.get("/api/diaryDisplay/:uid", (req, res) => {
  const { uid } = req.params;
  const qry = 'SELECT * FROM tbldiaries d,tblguider g where d.guiderid=g.guiderid and d.guiderid=?'
  db.query(qry, [uid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results);
    }
  })
})

app.get("/api/cityDisplay", (req, res) => {
  db.query("SELECT * FROM tblcity ", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  })
})

app.get("/api/displayDiaries/:gid", (req, res) => {
  const { gid } = req.params;
  db.query("SELECT * FROM tbldiaries where guiderid	= ?", [gid], (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  })
})

app.post("/api/diaryadd", (req, res) => {
  const { diary_title, cityid, guiderid, diary_description, diary_thumnail, created_time_date, diary_thumnail_urlname } = req.body;
  const sql =
    "INSERT INTO tbldiaries (diary_title, cityid, guiderid, diary_description, diary_thumnail, created_time_date, diary_thumnail_urlname ) VALUES (?,?,?,?,?,?,?)";
  const values = [diary_title, cityid, guiderid, diary_description, diary_thumnail, created_time_date, diary_thumnail_urlname];
  db.query(sql, values, (err) => {
    if (err) {
      console.error("Error adding state data:", err);
      return res.status(500).json({ error: "Failed to add state data" });
    }
    res.json({ message: "vlog data added successfully" });
  });
});

app.get("/api/filterCat/:category_id", (req, res) => {
  const { category_id } = req.params
  db.query("SELECT p.*,c.*, ct.*, ( SELECT AVG(rating) FROM tblreview r WHERE r.placeid = p.placeid) AS average_rating,(SELECT COUNT(*) FROM tblreview r WHERE r.placeid = p.placeid) AS review_count FROM tblplace p, tblcity c, tblcategory ct WHERE p.cityid = c.cityid AND p.category_id = ct.category_id   AND p.category_id = ? ORDER BY RAND();", [category_id], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results)
    }
  })
})

app.get("/api/countVlogs/:guiderid", (req, res) => {
  const { guiderid } = req.params
  db.query("SELECT COUNT(*) AS vcount FROM tblvlog where guiderid = ?", [guiderid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results)
    }
  })

})

app.get("/api/countPost/:guiderid", (req, res) => {
  const { guiderid } = req.params
  db.query("SELECT COUNT (*) AS pcount FROM tblpost where guiderid = ?", [guiderid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results)
    }
  })
})

app.get("/api/countFollow/:uid", (req, res) => {
  const { uid } = req.params
  db.query("SELECT COUNT(*) AS fcount FROM tblfollow where uid = ? ", [uid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results)
    }
  })
})

app.get("/api/SingleVlog/:vlogid", (req, res) => {
  const { vlogid } = req.params
  db.query("SELECT * FROM tblvlog v,tblguider g WHERE v.guiderid = g.guiderid AND v.vlogid = ?", [vlogid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results)
    }
  })
})

app.get("/api/SinglePost/:postid", (req, res) => {
  const { postid } = req.params
  db.query("SELECT * FROM tblpost p,tblguider g WHERE p.guiderid = g.guiderid AND p.postid = ?", [postid], (err, results) => {
    if (err) {
      console.error(err);
    }
    else {
      res.json(results);
    }
  })
})


// Like Handle

app.post("/api/like/:postid/:uid", async (req, res) => {
  const { postid, uid } = req.params;
  const sql = "INSERT INTO `tbllike`(`postid`, `uid`) VALUES (?,?)";
  const values = [postid, uid];
  db.query(sql, values, (err, result) => {
    if (err) {
      //console.error("insertion error", err);
    } else {
      console.log("data inserted succesfully");
      res.json("data inserted ");
    }
  });
});

// Comments handle 

app.post("/api/addComment", (req, res) => {
  const { comments, postid, uid, cmt_date_time } = req.body
  const sql = "INSERT INTO tblcomment(comments,postid,uid,cmt_date_time)VALUES(?,?,?,?)";
  const values = [comments, postid, uid, cmt_date_time];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Insertion errors", err);
    }
    else {
      console.log("Data Inserted")
      res.json("Data Inserted Successfully!!!!")
      console.log(results)
    }

  })
})

app.get("/api/displayComment/:postid", (req, res) => {
  const { postid } = req.params;
  db.query("SELECT * FROM tblcomment c,tbluser u WHERE c.uid = u.uid AND postid = ?", [postid], (err, results) => {
    if (err) {
      console.error(err);
    }
    else {
      res.json(results);
    }
  })
})

app.delete("/api/like/:postid/:uid", async (req, res) => {
  const { postid, uid } = req.params;
  const sql = "DELETE FROM `tbllike` WHERE postid = ? AND uid = ?";
  const values = [postid, uid];
  db.query(sql, values, (err, results) => {
    if (err) {
      //console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});



app.get("/api/likedata/:uid", (req, res) => {
  const { uid } = req.params;
  db.query(
    "SELECT * FROM tbllike WHERE uid=? ",
    [uid],
    (err, results) => {
      if (err) {
        //console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/api/countlikes/:postid", (req, res) => {
  const { postid } = req.params;
  db.query(
    "SELECT COUNT(*) AS likeCount FROM tbllike WHERE postid=? ",
    [postid],
    (err, results) => {
      if (err) {
        //console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/api/countComment/:postid", (req, res) => {
  const { postid } = req.params;
  db.query("SELECT COUNT(*) AS commentCount FROM tblcomment WHERE postid = ?", [postid], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
    else {
      res.json(results);
    }
  })
})

//Save insert

app.post("/api/save/:uid/:postid", (req, res) => {
  const { uid, postid } = req.params;
  const sql = "INSERT INTO tblsave(uid,postid) VALUES (?,?)"
  const values = [uid, postid]

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Insertion Error :", err);
      res.status(500).json({ error: "Failed To Insert Post" })
    }
    else {
      console.log("Data Inserted Successfully");
      res.json({ message: "Post added successfully" });
    }
  })
})

app.delete("/api/save/:uid/:postid", async (req, res) => {
  const { uid, postid } = req.params;
  const sql = "DELETE FROM `tblsave` WHERE uid = ? AND postid = ? ";
  const values = [uid, postid];
  db.query(sql, values, (err, results) => {
    if (err) {
      //console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});



app.get("/api/savedata/:uid", (req, res) => {
  const { uid } = req.params;
  db.query(
    "SELECT * FROM tblsave WHERE uid=? ",
    [uid],
    (err, results) => {
      if (err) {
        //console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json(results);
      }
    }
  );
});

// for save page

app.get("/api/savedisplay/:uid", (req, res) => {
  const { uid } = req.params;
  db.query("SELECT p.*, s.* FROM tblpost p, tblsave s where p.postid = s.postid and s.uid = ?", [uid], (err, results) => {
    if (err) {
      console.error(err)
    }
    else {
      res.json(results);
    }
  })
})

// for remove save
app.delete("/api/removesave/:saveid", (req, res) => {
  const { saveid } = req.params;
  const sql = "DELETE FROM `tblsave` WHERE save_id = ?  ";
  const values = [saveid];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(results)
      res.json({ message: "Data Deleted", results });
    }
  });
});

//All Guider on guider page

app.get("/api/AllguiderDisplay", (req, res) => {
  const { uid } = req.params
  db.query(`SELECT *
           FROM tbluser u,tblguider g WHERE u.uid = g.uid 
          AND u.utype = 'Guider'
          AND u.uid NOT IN(SELECT uid FROM tblfollow WHERE followerid = ?)`, [uid], (err, results) => {
    if (err) {
      console.error(err);
    }
    else {
      res.json(results);
    }
  })
})


// Add Follow 

app.post("/api/addFollow/:uid/:followerid", (req, res) => {
  const { uid, followerid } = req.params;
  const qry = "INSERT INTO tblfollow (`uid`,`followerid`) VALUES (?,?)";
  const values = [uid, followerid];
  db.query(qry, values, (err, results) => {
    if (err) {
      console.error("Insertion Error:", err);
      res.status(500).json({ error: "Failed to insert review" });
    } else {
      console.log("Data Inserted Successfully");
      res.json({ message: "Review added successfully" });
    }
  })
})

// remove follow

app.delete("/api/addFollow/:uid/:followerid", (req, res) => {
  const { uid, followerid } = req.params;
  const sql = "DELETE FROM `tblfollow` WHERE uid = ? AND followerid = ? ";
  const values = [uid, followerid];
  db.query(sql, values, (err, results) => {
    if (err) {
      //console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

//followdata

app.get("/api/followdata/:uid/:followerid", (req, res) => {
  const { uid,followerid } = req.params;
  db.query(
    "SELECT * FROM tblfollow WHERE uid=? and followerid = ?",
    [uid,followerid],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        // Assuming you want to check if the current user follows any specific user
        const followStatus = results.length > 0;
        // console.log(followStatus) // If results array is not empty, user is followed, otherwise not followed
        res.json({ followStatus }); // Include the follow status in the response
      }
    }
  );
});

app.get("/api/SingleDiary/:diary_id", (req, res) => {
  const { diary_id } = req.params
  db.query(`SELECT p.*, g.*, u.*
  FROM tblpost p
  JOIN tblguider g ON p.guiderid = g.guiderid
  JOIN tbluser u ON g.uid = u.uid 
  WHERE p.diary_id = ?;`, [diary_id], (err, results) => {
    if (err) {
      console.error(err);
    }
    else {
      res.json(results);
    }
  })
})


app.get("/api/Dairy/:diary_id", (req, res) => {
  const { diary_id } = req.params
  db.query(`SELECT * FROM tbldiaries WHERE diary_id = ?;`, [diary_id], (err, results) => {
    if (err) {
      console.error(err);
    }
    else {
      res.json(results);
    }
  })
})

app.get("/api/categorycount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_category FROM tblcategory", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalCategory = result[0].total_category; // Assuming the count is returned as total_users
    console.log('Number of category:', totalCategory);
    res.json({ totalCategory });
  });
});

app.get("/api/postcount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_post FROM tblpost", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalPost = result[0].total_post; // Assuming the count is returned as total_users
    console.log('Number of post:', totalPost);
    res.json({ totalPost });
  });
});

app.get("/api/diariescount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_diary FROM tbldiaries", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalDiary = result[0].total_diary; // Assuming the count is returned as total_users
    console.log('Number of diaries:', totalDiary);
    res.json({ totalDiary });
  });
});

app.get("/api/vlogcount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_vlog FROM tblvlog", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalVlog = result[0].total_vlog; // Assuming the count is returned as total_users
    console.log('Number of vlog:', totalVlog);
    res.json({ totalVlog });
  });
});

app.get("/api/statuscheck/:uid",(req,res)=>{
  const {uid}=req.params;
  db.query("SELECT status FROM tbluser WHERE uid=?",[uid],(err,results)=>{
    if(err){
      res.status(500).json({error:"Internal"})
    }
    else{
      res.json(results);
    }
  })
})

app.get("/api/countriescount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_country FROM tblcountry", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalCountry = result[0].total_country; // Assuming the count is returned as total_users
    console.log('Number of country:', totalCountry);
    res.json({ totalCountry });
  });
});

app.get("/api/statecount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_state FROM tblstate", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalState = result[0].total_state; // Assuming the count is returned as total_users
    console.log('Number of states:', totalState);
    res.json({ totalState });
  });
});

app.get("/api/citycount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_city FROM tblcity", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalCity = result[0].total_city; // Assuming the count is returned as total_users
    console.log('Number of city:', totalCity);
    res.json({ totalCity });
  });
});

app.get("/api/usercount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_user FROM tbluser", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalUser = result[0].total_user; // Assuming the count is returned as total_users
    console.log('Number of User:', totalUser);
    res.json({ totalUser });
  });
});


app.get("/api/guidercount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_guider FROM tblguider", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalGuider = result[0].total_guider; // Assuming the count is returned as total_users
    console.log('Number of guider:', totalGuider);
    res.json({ totalGuider });
  });
});

// app.get("/api/search",(req,res)=>{
//   const searchTerm = req.query.term;
//   db.query("SELECT * FROM tblguider WHERE nick_name LIKE ?",[`%${searchTerm}%`],(err,results)=>{
//     if(err){
//       console.error('Error executing query',err);
//       res.status(500).json({error:'Internal server error'})
//     }else{
//       res.json(results)
//     }
//   })
// })


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// Remove all followed Guiders query

// select * from tbluser where u.utype='guider' And u.uid NOT IN (select uid from tblfollow Where followerid = ?)