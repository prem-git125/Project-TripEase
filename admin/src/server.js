const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');

const app = express();
const port = 8080;
app.use(cors());

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  databse: "",
  database: "majorpdb",
});



db.connect((err) => {
  if (err) {

    console.error(err);
  } else {
    console.log("Database Connected");
  }
});

const secretKey =
  process.env.JWT_SECRET || crypto.randomBytes(32).toString("hex"); 

app.post("/api/data", (req, res) => {
  const { uname, pwd, email, status, reg_date_time, utype, url, urlname } =
    req.body;
  const sql =
    "INSERT INTO tbluser (uname,pwd,email,status,reg_date_time,utype,url,urlname) VALUES (?,?,?,?,?,?,?,?)";
  const values = [
    uname,
    pwd,
    email,
    status,
    reg_date_time,
    utype,
    url,
    urlname,
  ];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Insertion Error", err);
    } else {
      console.log("Data Inserted Successfully");
      res.json("Data Inserted Successfully");
    }
  });
});

// admin insert
 app.post("/api/data/adminlogin", (req, res) => {
   const { uname, pwd, email, ppicurl, contact, ppicurlname } = req.body
   const sql = "INSERT INTO tbladmin (uname,pwd,email,ppicurl,contact,ppicurlname) VALUES (?,?,?,?,?,?)"
   const values = [uname, pwd, email, ppicurl, contact, ppicurlname]
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

app.post("/api/admin", (req, res) => {
  const { email, pwd } = req.body;
  const sql = `SELECT * FROM tbladmin WHERE email = ? AND pwd = ?`;
  const values = [email, pwd];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.length > 0) {
        const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
        res.json({ result: results[0], token: token });
      } else {
        res.status(401).json({ error: "Incorrect Email or Password" });
      }
    }
  });
});

app.get("/api/country", (req, res) => {
  db.query("SELECT * from tblcountry", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
    }
  });
});

app.put("/api/update/:uid", (req, res) => {
  const { uid } = req.params;
  const { status } = req.body;
  const sql = "UPDATE tbluser SET status=? WHERE uid=?";
  const values = [status, uid];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data Updated Successfully");
      db.query("SElECT * FROM tbluser", (err, results) => {
        if (err) {
          console.error(err);
        } else {
          res.json(results);
          console.log(results);
        }
      });
    }
  });
});

app.get("/api/data", (req, res) => {
  db.query("SELECT * FROM tbluser", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

app.delete("/api/userdel/:uid", (req, res) => {
  const { uid } = req.params;
  const sql = "DELETE FROM `tbluser` WHERE uid = ?  ";
  const values = [uid];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err.message);
    } else {
      res.json({ message: "Data Deleted", results });
    }
  });
});

app.get("/api/countrydata", (req, res) => {
  db.query("SELECT * FROM tblcountry", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

app.delete("/api/countrydelete/:cid", (req, res) => {
  const { cid } = req.params;
  const sql = "DELETE FROM `tblcountry` WHERE cid = ?  ";
  const values = [cid];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err.message);
    } else {
      res.json({ message: "Data Deleted", results });
    }
  });
});

app.post("/api/countryadd", (req, res) => {
  const { cname, curl, curlname } = req.body;
  const sql = "INSERT INTO tblcountry (cname,curl,curlname) VALUES (?,?,?)";
  const values = [cname, curl, curlname];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Insertion Error", err);
    } else {
      console.log("Data Inserted Successfully");
      res.json("Data Inserted Successfully");
    }
  });
});

app.get("/api/countrydata", (req, res) => {
  db.query("SELECT * FROM tblcountry", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

// app.get("/api/statedata", (req, res) => {
//   // getting cid as pass parameter of api
//   // const { cid } = req.params;
//   // console.log(cid);
//   db.query("SELECT * FROM tblstate", (err, results) => {
//     if (err) {
//       console.error("Error fetching state data:", err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//     res.json(results);
//   });
// });

app.get("/api/statedata", (req, res) => {
  db.query(
    "SELECT * FROM tblstate s,tblcountry c where s.cid=c.cid",
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        res.json(results);
        console.log(results);
      }
    }
  );
});

app.delete("/api/statedelete/:sid", (req, res) => {
  const { sid } = req.params;
  const sql = "DELETE FROM `tblstate` WHERE sid = ?  ";
  const values = [sid];
  db.query(sql, values, (err, results) => {
    if (err) {
      // console.error();
      alert("not deleteed data");
    } else {
      res.json({ message: "Data Deleted", results });
    }
  });
});

app.post("/api/stateadd", (req, res) => {
  const { sname, cid, surl, surlname } = req.body;
  const sql = "INSERT INTO tblstate (sname,cid,surl,surlname) VALUES (?,?,?,?)";
  const values = [sname, cid, surl, surlname];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Insertion Error", err);
    } else {
      console.log("Data Inserted Successfully");
      res.json("Data Inserted Successfully");
    }
  });
});

app.get("/api/citydata", (req, res) => {
  db.query(
    "SELECT * FROM tblcity c,tblstate s where c.sid=s.sid",
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        res.json(results);
        console.log(results);
      }
    }
  );
});

app.get("/api/statedata", (req, res) => {
  db.query("SELECT * FROM tblstate", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

app.delete("/api/citydelete/:cityid", (req, res) => {
  const { cityid } = req.params;
  const sql = "DELETE FROM `tblstate` WHERE cityid = ?  ";
  const values = [cityid];
  db.query(sql, values, (err, results) => {
    if (err) {
      // console.error();
      alert("not deleteed data");
    } else {
      res.json({ message: "Data Deleted", results });
    }
  });
});

app.post("/api/cityadd", (req, res) => {
  const { cityName, sid, cityurl, cityurlname, description } = req.body;
  const sql =
    "INSERT INTO tblcity (cityName,sid,cityurl,cityurlname,description) VALUES (?,?,?,?,?)";
  const values = [cityName, sid, cityurl, cityurlname, description];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Insertion Error", err);
    } else {
      console.log("Data Inserted Successfully");
      res.json("Data Inserted Successfully");
    }
  });
});

app.get("/api/catdata", (req, res) => {
  db.query("SELECT * FROM tblcategory", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

app.post("/api/place/insert", (req, res) => {
  const {
    place_name,
    category_id,
    description,
    cityid,
    c_url,
    c_urlname,
    placeImgUrls,
    maps,
  } = req.body;
  const qry =
    "INSERT INTO tblplace (place_name,category_id,description,cityid,c_url,c_urlname,placeImgUrls,maps) VALUES (?,?,?,?,?,?,?,?)";
  const values = [
    place_name,
    category_id,
    description,
    cityid,
    c_url,
    c_urlname,
    placeImgUrls,
    maps,
  ];
  db.query(qry, values, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.json("DATA INSERTED");
    }
  });
});

app.get("/api/placedata", (req, res) => {
  db.query(
    "SELECT * FROM tblplace p,tblcity c,tblcategory ct where p.cityid=c.cityid and p.category_id=ct.category_id",
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        res.json(results);
        console.log(results);
      }
    }
  );
});

app.get("/api/catdata", (req, res) => {
  db.query(
    "SELECT * FROM tblplace p,tblcategory c where p.placeid=c.category_id",
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        res.json(results);
        console.log(results);
      }
    }
  );
});

app.delete("/api/placedelete/:placeid", (req, res) => {
  const { placeid } = req.params;
  const sql = "DELETE FROM `tblplace` WHERE placeid = ?  ";
  const values = [placeid];
  db.query(sql, values, (err, results) => {
    if (err) {
      // console.error();
      alert("not deleteed data");
    } else {
      res.json({ message: "Data Deleted", results });
    }
  });
});

app.post("/api/diaryAdd", (req, res) => {
  const { diary_title, cityid, guider_id, diary_description, diary_thumnail, created_time_date, diary_thumnail_urlname } = req.body
  const sql = "INSERT INTO  tbldiaries (diary_title,cityid,guider_id,diary_description,diary_thumnail,created_time_date,diary_thumnail_urlname) VALUES (?,?,?,?,?,?,?)"
  const values = [diary_title, cityid, guider_id, diary_description, diary_thumnail, created_time_date, diary_thumnail_urlname]
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

app.get("/api/postdata", (req, res) => {
  db.query("SELECT * FROM tblpost", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

//post chart
app.get("/api/postchart", (req, res) => {
  const query = `SELECT DATE_FORMAT(post_date_time , '%Y-%m-%d') AS post_date, COUNT(*) AS post_Count 
                 FROM tblpost 
                 GROUP BY post_date 
                 ORDER BY post_date`;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

//user chart

app.get("/api/userchart", (req, res) => {
  const query = `SELECT DATE_FORMAT(reg_date_time , '%Y-%m-%d') AS user_date, COUNT(*) AS user_Count 
                 FROM tbluser 
                 GROUP BY user_date 
                 ORDER BY user_date`;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

//vlog chart

app.get("/api/vlogchart", (req, res) => {
  const query = `SELECT DATE_FORMAT(date_time , '%Y-%m-%d') AS vlog_date, COUNT(*) AS vlog_Count 
                 FROM tblvlog 
                 GROUP BY vlog_date 
                 ORDER BY vlog_date`;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

//guider chart

app.get("/api/guiderchart", (req, res) => {
  const query = `SELECT c.cityname, COUNT(*) AS guider_Count 
                 FROM tblguider g
                 INNER JOIN tblcity c ON g.cityid = c.cityid
                 GROUP BY g.cityid, c.cityname 
                 ORDER BY g.cityid`;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
      console.log(results);
    }
  });
});


//user count

app.get("/api/usercount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_users FROM tbluser", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    const totalUsers = result[0].total_users; // Assuming the count is returned as total_users
    console.log('Number of users:', totalUsers);
    res.json({ totalUsers });
  });
});

//country count

app.get("/api/countrycount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_country FROM tblcountry", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0 || !result[0].total_country) {
      console.error('No data found');
      return res.status(404).json({ error: 'No data found' });
    }
    const totalCountry = result[0].total_country;
    console.log('Number of countries:', totalCountry);
    return res.json({ totalCountry });
  });
});

//state count

app.get("/api/statecount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_state FROM tblstate", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0 || !result[0].total_state) {
      console.error('No data found');
      return res.status(404).json({ error: 'No data found' });
    }
    const totalState = result[0].total_state;
    console.log('Number of states:', totalState);
    return res.json({ totalState });
  });
});

//city count

app.get("/api/citycount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_city FROM tblcity", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0 || !result[0].total_city) {
      console.error('No data found');
      return res.status(404).json({ error: 'No data found' });
    }
    const totalCity = result[0].total_city;
    console.log('Number of cities:', totalCity);
    return res.json({ totalCity });
  });
});

//places count

app.get("/api/placecount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_place FROM tblplace", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0 || !result[0].total_place) {
      console.error('No data found');
      return res.status(404).json({ error: 'No data found' });
    }
    const totalPlace = result[0].total_place;
    console.log('Number of places:', totalPlace);
    return res.json({ totalPlace });
  });
});

//post count
app.get("/api/postcount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_post FROM tblpost", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0 || !result[0].total_post) {
      console.error('No data found');
      return res.status(404).json({ error: 'No data found' });
    }
    const totalPost = result[0].total_post;
    console.log('Number of post:', totalPost);
    return res.json({ totalPost });
  });
});
//vlog count

app.get("/api/vlogcount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_vlog FROM tblvlog", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0 || !result[0].total_vlog) {
      console.error('No data found');
      return res.status(404).json({ error: 'No data found' });
    }
    const totalVlog = result[0].total_vlog;
    console.log('Number of Vlog:', totalVlog);
    return res.json({ totalVlog });
  });
});
//guider count

app.get("/api/guidercount", (req, res) => {
  db.query("SELECT COUNT(*) AS total_guider FROM tblguider", (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0 || !result[0].total_guider) {
      console.error('No data found');
      return res.status(404).json({ error: 'No data found' });
    }
    const totalGuider = result[0].total_guider;
    console.log('Number of guider:', totalGuider);
    return res.json({ totalGuider });
  });
});

app.get("/api/vlogdata", (req, res) => {
  db.query("SELECT * FROM tblvlog", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

app.get("/api/diarydata", (req, res) => {
  db.query("SELECT diary_id,diary_title,diary_thumnail,diary_description,guiderid,created_time_date FROM tbldiaries ", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
