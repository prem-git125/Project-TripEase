-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2024 at 12:11 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `majorpdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblcategory`
--

CREATE TABLE `tblcategory` (
  `category_id` int(11) NOT NULL,
  `catName` varchar(200) NOT NULL,
  `caturl` varchar(500) NOT NULL,
  `caturlname` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblcategory`
--

INSERT INTO `tblcategory` (`category_id`, `catName`, `caturl`, `caturlname`) VALUES
(1, 'ShopVista', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Fmalls.jpg?alt=media&token=da80be59-0f6e-4edf-8a3a-d9b634212306', 'malls.jpg'),
(2, 'FlavorLuxe', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Frestaurants.jpg?alt=media&token=3581d2b4-689d-4be5-abab-61880e060c29', 'restaurants.jpg'),
(3, 'AquaScape', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Fbeaches.jpg?alt=media&token=c14b88f1-c0a2-4fba-8576-ca7886136f8f', 'beaches.jpg'),
(4, 'GreenVibe', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Fgardens.jpg?alt=media&token=1f0b7f03-d75e-4454-b133-4ebf57203736', 'gardens.jpg'),
(5, 'StayZen', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Fhotels.jpg?alt=media&token=73e5f24a-216d-469f-8c70-56ce7f375588', 'hotels.jpg'),
(6, 'Clubs&Bars', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Fbars.jpg?alt=media&token=b56c9f5b-0480-4b0f-baf3-1b4691fa5a16', 'bars.jpg'),
(7, 'ShowPulse', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Fshowpulse.jpg?alt=media&token=fb6ca1fe-8bcd-4366-878b-bac7c340f164', 'showpulse.jpg'),
(8, 'BiteJoy', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Fbitejoy.jpg?alt=media&token=4abd60c0-503b-4530-8e9d-f531a7ba75e5', 'bitejoy.jpg'),
(9, 'TimeHonor', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Ftimehonor.jpg?alt=media&token=36e3024d-acac-4cc7-892d-94274d572473', 'timehonor.jpg'),
(10, 'ExploreRush', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Categoryimg%2Fexplorerush.jpg?alt=media&token=b94294d5-07fe-4e4a-afad-13ce03bd8c52', 'explorerush.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tblcity`
--

CREATE TABLE `tblcity` (
  `cityid` int(11) NOT NULL,
  `cityName` varchar(250) NOT NULL,
  `sid` int(11) NOT NULL,
  `cityurl` varchar(700) NOT NULL,
  `cityurlname` varchar(500) NOT NULL,
  `description` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblcity`
--

INSERT INTO `tblcity` (`cityid`, `cityName`, `sid`, `cityurl`, `cityurlname`, `description`) VALUES
(1, 'Ahmedabad', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fahmedabad.jpg?alt=media&token=f510eb51-9d04-4737-94bf-f80485b87fce', 'ahmedabad.jpg', ' Vibrant city in Gujarat known for rich culture and heritage'),
(2, 'Gandhinagar', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fgandhinagar.jpg?alt=media&token=723229e5-dbcf-42dc-ad7f-c689520a7ece', 'gandhinagar.jpg', 'Planned capital city of Gujarat, known for government institutions'),
(3, 'Surat', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fsurat.jpg?alt=media&token=803ba253-a124-4f5c-af7d-1e5c5549065e', 'surat.jpg', 'Vibrant Gujarat city famous for textiles, culture, and cuisine'),
(4, 'Vadodara', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fvadodara.jpg?alt=media&token=37f8c74b-7562-4cb7-b564-4ef565844c7c', 'vadodara.jpg', 'Cultural hub of Gujarat with royal heritage and industrial prowess'),
(5, 'Jaipur', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fjaipur.jpg?alt=media&token=58cbd754-904d-4d0c-b66e-3b5d00c0fadd', 'jaipur.jpg', 'Rajasthan\'s Pink City known for forts, palaces, and culture'),
(6, 'Udaipur', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fudaipur.jpg?alt=media&token=2845c929-91f8-4019-af18-7c1dd3216f83', 'udaipur.jpg', ' \"City of Lakes,\" Rajasthan gem, palaces, culture, romance, hospitality'),
(7, 'Jodhpur', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fjodhpur.jpg?alt=media&token=710485e8-2f1c-4420-a2d5-902ae8d7adf9', 'jodhpur.jpg', 'Majestic Rajasthan city known for forts, palaces, and vibrant culture'),
(8, 'Jaisalmer', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fjaisalmer.jpg?alt=media&token=fcf566be-6fc7-44b1-a80d-2fd0a3808db9', 'jaisalmer.jpg', 'Enchanting Rajasthan city famed for golden sandstone architecture, forts'),
(9, 'Mumbai', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fmumbai.jpg?alt=media&token=cb0a5956-8f84-471f-aa8a-c3d26582c85b', 'mumbai.jpg', 'iconic landmarks like the Gateway of India and Marine Drive, and vibrant nightlife'),
(10, 'Pune', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fpune.jpg?alt=media&token=17850827-433b-41d9-844e-029cd5b6ee6d', 'pune.jpg', 'Cultural, educational city known for history, industry, and greenery'),
(11, 'Nagpur', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fnagpur.jpg?alt=media&token=5ce8e1ca-8b03-416d-8404-0d563fe18d32', 'nagpur.jpg', 'Nagpur is famous for its oranges, historical landmarks like the Deekshabhoomi and Sitabuldi Fort'),
(12, 'Nashik', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fnashik.jpg?alt=media&token=53c5b90c-99b6-490a-8ebb-17a533b1bc0b', 'nashik.jpg', 'Known as the \"Wine Capital of India,\" Nashik is famous for its vineyards and wine tourism'),
(13, 'Panaji (Panjim)', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fpanaji(panjim).jpg?alt=media&token=2d86470f-2b2b-4226-bd10-f729dc4029a5', 'panaji(panjim).jpg', 'Goa\'s capital, picturesque riverside city, colonial architecture, vibrant culture'),
(14, 'Margao', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fmargao.jpg?alt=media&token=53fe8cda-1427-4233-a52a-95a335b26367', 'margao.jpg', 'Cultural and commercial hub of South Goa, bustling markets'),
(15, 'Vasco da Gama', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fvascodagama.jpg?alt=media&token=02eefca7-6f31-4e14-b758-0cad48db7ddb', 'vascodagama.jpg', 'Major Goan city with port, industry, and scenic beaches'),
(16, 'Mapusa', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fmapusa.jpg?alt=media&token=e04a3e48-d9a1-4bbe-b672-9a23a9e9a6d2', 'mapusa.jpg', 'Bustling market town in North Goa, known for its markets '),
(17, 'Dehradun', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fdehradun.jpg?alt=media&token=2e835cc9-8d0d-4e87-acfd-1eb83dacf2d1', 'dehradun.jpg', 'Capital city, nestled in foothills, known for education and administration'),
(18, 'Haridwar', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fharidwar.jpg?alt=media&token=54ca3725-6661-4084-b8e4-b25aaac04c5e', 'haridwar.jpg', ' Holy city on Ganges, pilgrimage site, spiritual festivals'),
(19, 'Rishikesh', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Frishikesh.jpg?alt=media&token=6a78434c-d61b-4c8a-92af-b2d3f04a2825', 'rishikesh.jpg', 'Yoga capital, spiritual retreat, adventure sports, scenic beauty'),
(20, 'Nainital', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fnainital.jpg?alt=media&token=7cd4b83c-6fec-4787-8a21-a040e2d2c627', 'nainital.jpg', 'Hill station, picturesque lake, Himalayan views, tourist destination'),
(21, 'Los Angeles', 14, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Flosangeles.jpg?alt=media&token=3cb689c5-8a81-4145-a031-b879e82f2a15', 'losangeles.jpg', ' Entertainment hub, diverse culture, iconic landmarks, vibrant nightlife'),
(22, 'San Francisco', 14, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fsanfrancisco.jpg?alt=media&token=f9ec01e7-cc24-4a30-ac13-8667a9c17fd7', 'sanfrancisco.jpg', 'Tech hub, Golden Gate Bridge, cultural diversity, scenic beauty'),
(23, 'San Diego', 14, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fsandiego.jpg?alt=media&token=d424a205-74c4-49f6-bc33-ff9620104c78', 'sandiego.jpg', ' Beach city, warm climate, naval base, family-friendly attractions'),
(24, 'Sacramento', 14, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fsacramento.jpg?alt=media&token=b9a798b6-1ba5-44dc-8ae8-e39b552e02d7', 'sacramento.jpg', 'State capital, historic landmarks, cultural events, gateway to Sierra Nevada'),
(25, 'Anchorage', 15, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fanchorage.jpg?alt=media&token=bbd09084-ad84-4c7d-be42-aa678a30d60a', 'anchorage.jpg', 'Largest city, cultural hub, gateway to outdoor adventures'),
(26, 'Fairbanks', 15, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Ffairbanks.jpg?alt=media&token=1e303828-951c-41b0-93e2-18832d30fa84', 'fairbanks.jpg', 'Northern city, gateway to Arctic, Northern Lights viewing'),
(27, 'Juneau', 15, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fjuneau.jpg?alt=media&token=5e0522f0-9da2-4f1b-8034-86083228f219', 'juneau.jpg', 'Capital city, nestled amidst mountains, wildlife, and outdoor recreation'),
(28, 'Sitka', 15, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fsitka.jpg?alt=media&token=2d3bc0c5-0a63-413e-ad37-3174d0d61a23', 'sitka.jpg', 'Historical town, rich Native American and Russian heritage'),
(29, 'Honolulu', 16, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fhonolulu.jpg?alt=media&token=4b480d63-27c8-4c74-a16b-5945a66486b5', 'honolulu.jpg', 'Capital city, vibrant culture, Waikiki Beach, historic landmarks'),
(30, 'Maui', 16, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fmaui.jpg?alt=media&token=2213a511-b1b5-479e-8960-2befb9a2f710', 'maui.jpg', ' Stunning beaches, lush landscapes, Haleakalā National Park, scenic drives'),
(31, 'Kailua-Kona', 16, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fkailua-kona.jpg?alt=media&token=bb46d9b7-6294-43ce-ab84-a2dfcf526d36', '', ' Sunny coast, snorkeling, coffee farms, historical sites'),
(33, 'Hilo', 16, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fhilo.jpg?alt=media&token=685b34ff-9a8a-41eb-90b5-b956b1d8e3ae', 'hilo.jpg', 'Rainforest town, waterfalls, Volcanoes National Park, botanical gardens'),
(34, 'Houston', 17, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fhouston.jpg?alt=media&token=9c926ec6-9099-4ea0-9dae-c7fabafd62ba', 'houston.jpg', 'Diverse city, space exploration, cultural attractions, vibrant culinary scene'),
(35, 'Dallas', 17, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fdallas.jpg?alt=media&token=534d8ee7-26ba-4f86-8868-edb4bb012a5d', 'dallas.jpg', 'Urban hub, arts district, shopping, historical sites, thriving economy'),
(36, 'Austin', 17, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Faustin.jpg?alt=media&token=1ab08413-79e6-4330-94dc-c8621482bf79', 'austin.jpg', ' Capital city, live music capital, tech hub, outdoor activities'),
(37, 'San Antonio', 17, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fsanantonio.jpg?alt=media&token=4f07838f-8d33-46a4-9551-8f4e65d3dbdf', 'sanantonio.jpg', 'Historic city, Alamo, River Walk, cultural festivals, vibrant nightlife'),
(38, 'Seattle', 51, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fseattle.jpg?alt=media&token=fe6bc54f-1a82-4101-9299-05f34372ce40', 'seattle.jpg', 'Iconic skyline, tech hub, cultural diversity, scenic waterfront'),
(39, 'Spokane', 51, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fspokane.jpg?alt=media&token=699f78bf-7829-41f9-bab0-ac24deeb7378', 'spokane.jpg', ' Vibrant city, riverfront parks, outdoor recreation, cultural events'),
(40, 'Tacoma', 51, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Ftacoma.jpg?alt=media&token=4fb3dc4e-bf10-4028-afd5-e0fde9785e3c', 'tacoma.jpg', 'Port city, museums, outdoor activities, stunning views of Mt. Rainier'),
(41, 'Bellevue', 51, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fbellevue.jpg?alt=media&token=271b9d17-e2bd-430e-8302-867746b35bcf', 'bellevue.jpg', 'Suburban oasis, upscale shopping, dining, and outdoor recreation'),
(42, 'Banda Aceh', 21, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fbandaaceh.jpg?alt=media&token=1094fc25-45a6-4a6e-90ec-ffbe93f724aa', 'bandaaceh.jpg', 'Capital city, historical landmarks, gateway to Aceh province'),
(43, 'Sabang', 21, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fsabang.jpg?alt=media&token=6fe9e8bf-dc95-4c6b-84fa-de76f3016d5d', 'sabang.jpg', 'Scenic island, pristine beaches, diving and snorkeling paradise'),
(44, 'Lhokseumawe', 21, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Flhokseumawe.jpg?alt=media&token=080213b2-dd72-418d-8d98-c362fb5c4f44', 'lhokseumawe.jpg', ' Industrial city, oil and gas hub, coastal charm'),
(45, 'Meulaboh', 21, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fmeulaboh.jpg?alt=media&token=4c55be2f-7c55-4b84-acc6-5980947bfa13', 'meulaboh.jpg', ' Coastal town, stunning beaches, natural beauty, Acehnese culture'),
(46, 'Serang', 19, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fserang.jpg?alt=media&token=5877cca5-cb78-4552-9c16-0afa98e03908', 'serang.jpg', 'Provincial capital, historical landmarks, cultural heritage, bustling markets'),
(47, 'Tangerang', 19, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Ftangerang.jpg?alt=media&token=7ba5057c-02ac-4c6c-8fd6-6da29449259b', 'tangerang.jpg', 'Industrial city, economic hub, modern infrastructure, shopping malls'),
(48, 'South Tangerang', 19, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fsouthtangerang.jpg?alt=media&token=798299f8-a471-41c2-a178-38cad8a7155c', 'southtangerang.jpg', 'Rapidly growing city, residential developments, commercial centers, green spaces'),
(49, 'Cilegon', 19, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fcilegon.jpg?alt=media&token=5557f9d6-f8ef-45ac-b6cd-ccfbb1b8c810', 'cilegon.jpg', 'Industrial port city, manufacturing hub, coastal attractions, vibrant markets'),
(50, 'Denpasar', 22, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fdenpasar.jpg?alt=media&token=38b2f618-6e02-4fef-8a88-541938e92c94', 'denpasar.jpg', 'Capital city, cultural center, bustling markets, gateway to Bali'),
(51, 'Ubud', 22, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fubud.jpg?alt=media&token=7a65a57a-02ef-4cad-8458-7e2d7e97c33f', 'ubud.jpg', 'Artistic town, lush rice terraces, spiritual retreat, cultural performances'),
(52, 'Kuta', 22, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fkuta.jpg?alt=media&token=d45b703a-f062-4f0d-9ff9-2ded031def69', 'kuta.jpg', 'Vibrant nightlife, surfing beaches, shopping, entertainment, tourist hub'),
(53, 'Seminyak', 22, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fseminyak.jpg?alt=media&token=bd045e08-dab9-4f44-9f31-7287946a6536', 'seminyak.jpg', 'Upscale beach resort, luxury hotels, fine dining, trendy nightlife'),
(54, 'Pangkal Pinang', 24, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fpangkalpinang.jpg?alt=media&token=c67d6478-4358-48da-9d69-bbd6981acdc2', 'pangkalpinang.jpg', 'Capital city, bustling port, cultural attractions, vibrant markets'),
(55, 'Sungailiat', 24, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fsungailiat.jpg?alt=media&token=e3185c11-dbdc-439f-bd2f-bde1e68d6ba6', 'sungailiat.jpg', ' Coastal town, beaches, seafood, mining heritage, cultural festivals'),
(56, 'Tanjung Pandan', 24, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Ftanjungpandan.jpg?alt=media&token=f2a94c49-e9a6-4b32-babe-3cc8dce39007', 'tanjungpandan.jpg', 'Coastal city, pristine beaches, water sports, mining history'),
(57, 'Toboali', 24, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Ftoboali.jpg?alt=media&token=c38fdb6e-f0b1-4525-8d5b-11b7f7b86c80', 'toboali.jpg', 'Coastal town, fishing industry, scenic beaches, laid-back atmosphere'),
(58, 'Gorontalo City', 25, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fgorontalocity.jpg?alt=media&token=62bef0b5-db93-4eff-9fd8-9feeeb4aa3d9', 'gorontalocity.jpg', 'Provincial capital, coastal city, vibrant culture, historical landmarks'),
(59, 'Limboto', 25, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Flimboto.jpg?alt=media&token=b8c7ab2b-c70d-4973-9a84-81c8ad407c52', 'limboto.jpg', ' Peaceful town, scenic lake, traditional markets, cultural festivals'),
(60, 'Kwandang', 25, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fkwandang.jpg?alt=media&token=1d4faff8-e897-4739-8ff7-f823b452cf39', 'kwandang.jpg', ' Coastal village, fishing community, serene beaches, local cuisine'),
(61, 'Tilamuta', 25, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Ftilamuta.jpg?alt=media&token=6222597d-5f2c-434c-9ebd-d0bc20f9ce1b', 'tilamuta.jpg', ' Mountainous region, lush forests, agricultural activities, traditional villages'),
(62, 'Perth', 59, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fperth.jpg?alt=media&token=b2e575ac-e3a9-4a87-a477-00efc4c8eb2f', 'perth.jpg', 'Capital city, vibrant culture, stunning beaches, thriving culinary scene'),
(63, 'Fremantle', 59, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Ffremantle.jpg?alt=media&token=149455f7-68a8-430d-9c7f-928311c33bfb', 'fremantle.jpg', 'Historic port city, charming streets, vibrant markets, maritime history'),
(64, 'Bunbury', 59, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fbunbury.jpg?alt=media&token=0e1f1fd8-ed02-4ae1-b0ad-dceca96ff238', 'bunbury.jpg', 'Coastal city, beautiful beaches, dolphin watching, vibrant arts scene'),
(65, 'Albany', 59, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Falbany.jpg?alt=media&token=b60028cd-626e-4037-956b-f465612b3978', 'albany.jpg', 'Coastal town, rich history, stunning natural landscapes, whale watching'),
(66, 'Melbourne', 60, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fmelbourne.jpg?alt=media&token=08ceea4b-02a4-4f4a-866f-c456d8095922', 'melbourne.jpg', 'Capital, cultural hub, vibrant arts scene, culinary delights, sports'),
(67, 'Geelong', 60, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fgeelong.jpg?alt=media&token=d8bf6d8e-ec59-47b5-95ed-4902ab093849', 'geelong.jpg', 'Coastal city, waterfront precinct, cultural attractions, gateway to Bellarine'),
(68, 'Ballarat', 60, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fballarat.jpg?alt=media&token=8be130b0-4ad6-445a-8f0b-9dc2df5a1c89', 'ballarat.jpg', ' Gold rush history, Sovereign Hill, Lake Wendouree, cultural events'),
(69, 'Bendigo', 60, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fbendigo.jpg?alt=media&token=c7d41ad5-d601-4017-9b4d-8b5093d0fea6', 'bendigo.jpg', 'Historic town, gold rush relics, art galleries, vibrant culture'),
(70, 'Adelaide', 61, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fadelaide.jpg?alt=media&token=d6441cdf-bbc8-43e6-b4bc-371fdd051522', 'adelaide.jpg', 'Capital, cultural center, festivals, coastal beauty, wine regions'),
(71, 'Port Lincoln', 61, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fportlincoln.jpg?alt=media&token=51a55c70-20f3-4645-8300-22eb6eab1790', 'portlincoln.jpg', 'Seafood capital, stunning coastline, wildlife encounters, adventure activities'),
(72, 'Whyalla', 61, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fwhyalla.jpg?alt=media&token=d81a6684-ac28-4609-bfa8-1c32c3b0ccb2', 'whyalla.jpg', 'Steel city, maritime history, fishing, gateway to Eyre Peninsula'),
(73, 'Mount Gambier', 61, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fmountgambier.jpg?alt=media&token=5bd4e2bf-e70c-4019-8154-661f11183842', 'mountgambier.jpg', 'Volcanic landscapes, Blue Lake, limestone caves, natural wonders'),
(74, 'Dubbo', 62, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fdubbo.jpg?alt=media&token=d6bc83f0-89d1-4fb3-8313-dcced784cda5', 'dubbo.jpg', 'Regional hub, Taronga Western Plains Zoo, cultural attractions'),
(75, 'Broken Hill', 62, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fbrokenhill.jpg?alt=media&token=df8fc05c-596c-48d8-8ea7-c21c0e503df6', 'brokenhill.jpg', ' Mining town, vibrant arts scene, iconic desert landscapes'),
(76, 'Orange', 62, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Forange.jpg?alt=media&token=0900b84b-2914-4215-a8e3-8207d6d29eff', 'orange.jpg', 'Wine region, foodie destination, picturesque countryside, cultural events'),
(77, 'Bathurst', 62, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fbathurst.jpg?alt=media&token=e59c28d1-ef52-438f-87af-617011458df7', 'bathurst.jpg', 'Historic city, Mount Panorama racing circuit, cultural festivals'),
(78, 'Darwin', 63, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fdarwin.jpg?alt=media&token=77c90c3f-26a9-4598-8c90-4aff6b6ec0d6', 'darwin.jpg', 'Capital city, tropical climate, multicultural, gateway to Outback'),
(79, 'Alice Springs', 63, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Falicesprings.jpg?alt=media&token=f2e7c1a1-cfd0-4619-a5e3-0b188edc300f', 'alicesprings.jpg', 'Remote town, Aboriginal culture, gateway to Red Centre'),
(80, 'Katherine', 63, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fkatherine.jpg?alt=media&token=6613ba0f-8359-45d9-9e66-b706dff59374', 'katherine.jpg', ' Scenic town, Nitmiluk National Park, Katherine Gorge, cultural sites'),
(81, 'Tennant Creek', 63, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Ftennantcreek.jpg?alt=media&token=8842e9ad-e70f-41b4-b83b-c5845575e35f', 'tennantcreek.jpg', 'Historic gold mining town, Indigenous culture, outback landscapes'),
(82, 'Lanzhou', 39, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Flanzhou.jpg?alt=media&token=cf753f7a-c3e8-4345-ac9d-65e76c4062b2', 'lanzhou.jpg', 'Capital city, Yellow River, Silk Road history, cultural landmarks'),
(83, 'Dunhuang', 39, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fdunhuang.jpg?alt=media&token=b1739773-a39a-4226-b8fa-30c39a952cd9', 'dunhuang.jpg', ' Ancient oasis town, Mogao Caves, Silk Road history'),
(84, 'Jiayuguan', 39, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fjiayuguan.jpg?alt=media&token=26827935-b60f-453d-8501-c5ffd97a8100', 'jiayuguan.jpg', 'Great Wall end point, historical fortress, desert landscapes'),
(85, 'Wuwei', 39, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fwuwei.jpg?alt=media&token=2e9305b5-ca1b-48d5-aa24-653c80a17140', 'wuwei.jpg', 'Historical city, Leitai Tomb, Buddhist grottoes, cultural heritage'),
(86, 'Xining', 40, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fxining.jpg?alt=media&token=6c1783da-7ab6-4f71-b55a-f3468aa1b600', 'xining.jpg', 'Provincial capital, Tibetan culture, gateway to Qinghai-Tibet Plateau'),
(87, 'Golmud', 40, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fgolmud.jpg?alt=media&token=60a3bb80-c4ec-4352-be12-baae3ff9aaa1', 'golmud.jpg', 'Transportation hub, gateway to Tibet, Qinghai Lake nearby'),
(88, 'Haidong', 40, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fhaidong.jpg?alt=media&token=aba82532-0df7-4ef9-ab8c-3f82a2651613', 'haidong.jpg', ' Industrial city, agricultural hub, Qinghai Lake nearby'),
(89, 'Delingha', 40, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fdelingha.jpg?alt=media&token=70765bfd-578f-4d89-9efa-fa635e7e1752', 'delingha.jpg', 'Remote city, astronomical observatory, unique landscapes, Tibetan culture'),
(90, 'Kunming', 41, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fkunming.jpg?alt=media&token=d0f257d8-1b57-4721-9d73-bce6d1244a36', 'kunming.jpg', 'Capital city, Spring City, cultural diversity, scenic landscapes'),
(91, 'Dali', 41, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fdali.jpg?alt=media&token=c1d460aa-a23e-472f-9570-11d7aed3a109', 'dali.jpg', 'Ancient town, Erhai Lake, Bai ethnic culture, picturesque scenery'),
(92, 'Lijiang', 41, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Flijiang.jpg?alt=media&token=c08cdc45-5b5b-4be7-bbbd-f3fc06755dcb', 'lijiang.jpg', 'UNESCO World Heritage Site, Old Town, Naxi culture'),
(93, 'Shangri-La (Zhongdian)', 41, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fshangri-la(zhongdian).jpg?alt=media&token=90768348-d108-4c55-8072-041a6a0cf805', 'shangri-la(zhongdian).jpg', 'Tibetan culture, Shika Snow Mountain, Shangri-La scenery'),
(94, 'Wuhan', 42, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fwuhan.jpg?alt=media&token=679c32aa-887e-4790-af04-2547026601e3', 'wuhan.jpg', 'Capital, major transportation hub, cultural and educational center'),
(95, 'Yichang', 42, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fyichang.jpg?alt=media&token=dcb6e393-b994-411a-b0ac-1ef475d8c47c', 'yichang.jpg', 'Gateway to Three Gorges, scenic beauty, historical landmarks'),
(96, 'Jingzhou', 42, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fjingzhou.jpg?alt=media&token=09cd01ac-9311-44cb-bd8e-9f80b4b37891', 'jingzhou.jpg', 'Ancient city, historical sites, cultural heritage, Three Kingdoms connection'),
(97, 'Huangshi', 42, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fhuangshi.jpg?alt=media&token=228fa4f7-bfee-409c-9fd0-ac805c6b8a2c', 'huangshi.jpg', 'Industrial city, historic sites, picturesque landscapes, Yangtze River proximity'),
(98, 'Changsha', 43, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fchangsha.jpg?alt=media&token=593047d3-09eb-426a-8437-c24651944ad3', 'changsha.jpg', ' Capital city, cultural center, historic sites, bustling markets, cuisine'),
(99, 'Yueyang', 43, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fyueyang.jpg?alt=media&token=4acc7c96-441c-4bfc-a560-007b0b1dab7d', 'yueyang.jpg', ' Riverside city, Yueyang Tower, Dongting Lake, cultural heritage'),
(100, 'Zhuzhou', 43, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fzhuzhou.jpg?alt=media&token=ef32bce3-ab60-421a-8202-c2f00b36e81d', 'zhuzhou.jpg', 'Industrial city, transportation hub, historic sites, scenic areas'),
(101, 'Hengyang', 43, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Cityimg%2Fhengyang.jpg?alt=media&token=73e81ee5-2acd-44d4-9283-3fdd21c5d29a', 'hengyang.jpg', 'Historic city, Mount Heng, cultural heritage, scenic spots'),
(102, 'Guwahati', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/cityimg%2Fguwahati.jpg?alt=media&token=4ab41d43-d793-4180-b834-09058bb45a84', 'guwahati.jpg', 'Vibrant city in northeast India, rich in culture and nature.'),
(103, 'Dibrugarh', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fdibrugarh.jpg?alt=media&token=2baea8f6-7545-46a8-9612-11cfb35c6ae0', 'Uimgdibrugarh.jpg', 'Dibrugarh is a vibrant city in the northeastern state of Assam, India, renowned for its tea industry and rich cultural heritage.'),
(104, 'Sadiya', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fsadiya.jpg?alt=media&token=9c4b6db1-b63d-442e-b5a9-939766236042', 'Uimgsadiya.jpg', ' \"Sadiya is a vibrant town nestled along the Brahmaputra River, renowned for its natural beauty, diverse culture, and rich history in Assam, India.\"'),
(105, 'Silchar', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fsilchar.jpg?alt=media&token=6b6dcabf-fa3b-4d19-9560-70d1163c5b63', 'Uimgsilchar.jpg', 'Silchar is a city in the northeastern state of Assam, India, known for its diverse cultural heritage and scenic beauty.'),
(106, 'Bhagalpur', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fbhagalpur.jpg?alt=media&token=585df0fb-b005-4ab0-8f11-1136fac42a4d', 'Uimgbhagalpur.jpg', ' Bhagalpur is a city in the eastern Indian state of Bihar, renowned for its silk industry and historic significance.'),
(107, 'Bodhgaya', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fbodhgaya.jpg?alt=media&token=e4830d51-63ec-40e0-be42-c14eb17e2247', 'Uimgbodhgaya.jpg', ' Bodh Gaya is a sacred pilgrimage site in the Indian state of Bihar, where Gautama Buddha attained enlightenment under the Bodhi tree.'),
(108, 'Patna', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fpatna.jpg?alt=media&token=3c0d3bff-ad94-4f7c-9f12-be7129d6a9da', 'Uimgpatna.jpg', ' Patna is the capital city of the Indian state of Bihar, rich in history and cultural heritage, serving as an important political and economic hub in the region'),
(109, 'Rajgir', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Frajgir.jpg?alt=media&token=9b8dd001-bc8a-48d9-a62c-cd2b093cb5e8', 'Uimgrajgir.jpg', ' Rajgir is a historic town in Bihar, India, notable for its association with Lord Buddha and ancient ruins, including the Vishwa Shanti Stupa.'),
(110, 'Amritsar', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Famritsar.jpg?alt=media&token=07cfe5b8-fc0f-431d-aca6-98f0ccd35f21', 'Uimgamritsar.jpg', ' Amritsar is a city in the northern Indian state of Punjab, distinguished by its cultural richness, highlighted by the iconic Golden Temple, a spiritual and architectural marvel.'),
(111, 'Chandigarh', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fchandigarh.jpg?alt=media&token=ef07d92c-db35-4d11-9828-85a65a9933ef', 'Uimgchandigarh.jpg', ' Chandigarh is a modern city in northern India, serving as the capital of the states of Punjab and Haryana, acclaimed for its urban design by Le Corbusier and green spaces.'),
(112, 'Bathinda', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fbathinda.jpg?alt=media&token=069b65f3-959b-44f7-a8c3-dda009f2ff21', 'Uimgbathinda.jpg', 'Bathinda is a city in the northern Indian state of Punjab, known for its historical significance, including the Qila Mubarak fort, and its importance as an agricultural and industrial center.'),
(113, 'Ludhiana', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fludhiana.jpg?alt=media&token=d479b6b0-423e-4882-9efc-db7ed44c9d9e', 'Uimgludhiana.jpg', 'Ludhiana is a major city in the northern Indian state of Punjab, renowned for its industrial prowess, particularly in textiles and manufacturing, and vibrant cultural scene.'),
(114, 'Anantnag', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fanantnag.jpg?alt=media&token=b0470657-c57c-485e-9ddb-4e59a6de5e64', 'Uimganantnag.jpg', 'Anantnag, nestled in the Indian union territory of Jammu and Kashmir, is renowned for its scenic beauty, including picturesque landscapes, rivers, and historic sites.'),
(115, 'Jammu', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fjammu.jpg?alt=media&token=b216ab6e-ff7b-47a1-9672-6d0a82db48f4', 'Uimgjammu.jpg', ' Jammu, located in the Indian union territory of Jammu and Kashmir, is a vibrant city renowned for its rich cultural heritage, historic temples, and scenic surroundings'),
(116, 'Leh', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fleh.jpg?alt=media&token=aa1f52a6-d135-4860-9321-53036a9b027d', 'Uimgleh.jpg', 'Leh, situated in the Indian union territory of Ladakh, is famed for its breathtaking Himalayan landscapes, Buddhist monasteries, and vibrant Tibetan culture.'),
(117, 'Srinagar', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fsrinagar.jpg?alt=media&token=293d7e98-750a-4720-96d0-8de446640809', 'Uimgsrinagar.jpg', 'Srinagar, the jewel of Kashmir, enchants with its serene Dal Lake, majestic Mughal gardens, and rich cultural heritage.'),
(118, 'Agra', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fagra.jpg?alt=media&token=d3e5629b-2763-44dc-9b0a-30fa451877a3', 'Uimgagra.jpg', 'Agra, located in the northern Indian state of Uttar Pradesh, is celebrated worldwide for the majestic Taj Mahal'),
(119, 'Kanpur', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fkanpur.jpg?alt=media&token=665cf94e-312a-4a84-b1c5-a76bcc4fb9af', 'Uimgkanpur.jpg', 'Kanpur, a major industrial city in Uttar Pradesh, India, is renowned for its textile and leather industries, along with historical landmarks like the Allen Forest Zoo.'),
(120, 'Varanasi', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fvaranasi.jpg?alt=media&token=beaf1e0e-b86e-4fb9-a09d-8620103a004b', 'Uimgvaranasi.jpg', 'Varanasi, situated in Uttar Pradesh, India, is one of the world\'s oldest continually inhabited cities'),
(121, 'Lucknow', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Flucknow.jpg?alt=media&token=be354d1a-eea0-4634-9d4a-066ad3bf4914', 'Uimglucknow.jpg', 'Lucknow, the capital city of Uttar Pradesh, India, is famed for its rich cultural heritage, exquisite Mughal architecture, and culinary delights such as kebabs and biryanis.'),
(122, 'Thiruvananthapuram', 12, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fthiruvananthapuram.jpg?alt=media&token=d77a25fc-36f1-46c2-8f93-b6685cc679d9', 'Uimgthiruvananthapuram.jpg', 'Thiruvananthapuram, the capital city of Kerala, India, is renowned for its historic monuments, vibrant cultural scene, and scenic beaches, including the famous Kovalam Beach.'),
(123, 'Kochi', 12, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fkochi.jpg?alt=media&token=aa6b6526-ecc8-4684-80dc-2388469910ab', 'Uimgkochi.jpg', 'Kochi, also known as Cochin, is a major port city in Kerala, India, celebrated for its cosmopolitan atmosphere'),
(124, 'Kozhikode', 12, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fkozhikode.jpg?alt=media&token=114c523d-5a37-405f-8724-fd8b92271aa0', 'Uimgkozhikode.jpg', 'Kozhikode, also known as Calicut, is a city in Kerala, India, famous for its historic significance as a trading hub, pristine beaches, and delectable Malabar cuisine.'),
(125, 'Thrissur', 12, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fthrissur.jpg?alt=media&token=7846ffe1-230c-455c-b7f6-80667fc078ea', 'Uimgthrissur.jpg', 'Thrissur, known as the cultural capital of Kerala, is renowned for its vibrant festivals, including the grand Thrissur Pooram'),
(126, 'Chennai', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fchennai.jpg?alt=media&token=43468bcb-e2e9-4436-b9cc-ae866b8e861b', 'Uimgchennai.jpg', 'Chennai, the capital of Tamil Nadu, is a vibrant coastal city celebrated for its rich cultural heritage, bustling markets, and stunning Marina Beach.'),
(127, 'Coimbatore', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fcoimbatore.jpg?alt=media&token=a51ea761-5268-4271-ba84-1d1212c4e524', 'Uimgcoimbatore.jpg', 'Coimbatore, located in Tamil Nadu, India, is known as the \"Manchester of South India\" for its thriving textile industry'),
(128, 'Madurai', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fmadurai.jpg?alt=media&token=2bf2669f-f96c-476e-b2f4-bb0e224330cb', 'Uimgmadurai.jpg', 'Madurai, one of the oldest cities in Tamil Nadu, is famed for its rich cultural heritage, exemplified by the majestic Meenakshi Amman Temple, vibrant street markets, and traditional Tamil cuisine.'),
(129, 'Tiruchirappalli', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Ftiruchirappalli.jpg?alt=media&token=3ddb4290-4d32-4886-a5fb-7ce30bc9756b', 'Uimgtiruchirappalli.jpg', 'Tiruchirappalli, also known as Trichy, is a city in Tamil Nadu, India, distinguished by its iconic Rockfort Temple');

-- --------------------------------------------------------

--
-- Table structure for table `tblcountry`
--

CREATE TABLE `tblcountry` (
  `cid` int(11) NOT NULL,
  `cname` varchar(200) NOT NULL,
  `curl` varchar(500) NOT NULL,
  `curlname` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblcountry`
--

INSERT INTO `tblcountry` (`cid`, `cname`, `curl`, `curlname`) VALUES
(1, 'Indonesia', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fbali.jpg?alt=media&token=96e2f060-f50a-4550-9ba8-ddf48d1e3324', 'bali.jpg'),
(2, 'United States Of America', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fmiami.jpg?alt=media&token=691bd2be-6268-4aad-87b3-dd78d8224c54', 'miami.jpg'),
(3, 'India', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fagra.jpg?alt=media&token=79c36111-af35-44e1-a289-4b8884969516', 'agra.jpg'),
(4, 'Australia', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Faustralia.jpg?alt=media&token=80ab9258-8ac1-43a8-88f5-120d9398a300', 'australia.jpg'),
(5, 'China', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fbeijing.jpg?alt=media&token=6f6011a1-21d0-48df-bbda-e7e20f4fc68f', 'beijing.jpg'),
(6, 'Germany', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fberlin.jpg?alt=media&token=37856445-1386-4e12-87bd-533d2a890491', 'berlin.jpg'),
(7, 'United Arab Emirates', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fdubai.jpg?alt=media&token=6bd295a9-7879-44d8-a7c7-09f890fbc2c0', 'dubai.jpg'),
(8, 'Egypt', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fgiza.jpg?alt=media&token=050aa439-70a5-42d5-ae4f-20d1fc0eb4e0', 'giza.jpg'),
(9, 'United Kingdom', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Flondon.jpg?alt=media&token=3347e215-e25d-4431-96dc-b158f20bd305', 'london.jpg'),
(10, 'Bangladesh', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fbangladesh.jpg?alt=media&token=f90370c1-ef3d-4f02-a2f0-b3b549d86156', 'bangladesh.jpg'),
(11, 'Oman', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fmuttrah.jpg?alt=media&token=143f1525-7e8b-4199-81a3-65bc7baf086d', 'muttrah.jpg'),
(12, 'Southeast Asia', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fsingapore.jpg?alt=media&token=c7aeb7c5-ca27-47c6-b930-e19cf25718b8', 'singapore.jpg'),
(13, 'Morocco', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Ftaghazout.jpg?alt=media&token=91c9c397-1c2c-48de-ab31-b1e0d08643d0', 'taghazout.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbldiaries`
--

CREATE TABLE `tbldiaries` (
  `diary_id` int(11) NOT NULL,
  `diary_title` varchar(255) NOT NULL,
  `cityid` int(11) NOT NULL,
  `guider_id` int(11) NOT NULL,
  `diary_description` int(11) NOT NULL,
  `diary_thumnail` varchar(1000) NOT NULL,
  `created_time_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `diary_thumnail_urlname` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbldiaries`
--

INSERT INTO `tbldiaries` (`diary_id`, `diary_title`, `cityid`, `guider_id`, `diary_description`, `diary_thumnail`, `created_time_date`, `diary_thumnail_urlname`) VALUES
(1, 'Udaipur Diaries', 6, 3, 0, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/DiaryImg%2Fudaipurdiaries.jpg?alt=media&token=20969af6-cc71-4892-9055-5fd27c688c06', '2024-03-13 10:49:16', 'DiaryImg/udaipurdiaries.jpg'),
(2, 'Jaipur Diary', 5, 6, 0, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/DiaryImg%2Fjaipurdiary.jpg?alt=media&token=a2a2a1fb-48a1-489f-aae3-2e9fe1216070', '2024-03-13 10:52:42', 'DiaryImg/jaipurdiary.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tblfollow`
--

CREATE TABLE `tblfollow` (
  `followid` int(255) NOT NULL,
  `uid` int(255) NOT NULL,
  `followerid` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblfollow`
--

INSERT INTO `tblfollow` (`followid`, `uid`, `followerid`) VALUES
(13, 6, 9),
(14, 8, 9),
(15, 8, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tblguider`
--

CREATE TABLE `tblguider` (
  `guiderid` int(255) NOT NULL,
  `uid` int(255) NOT NULL,
  `nick_name` varchar(255) NOT NULL,
  `cover_photo` varchar(500) NOT NULL,
  `bio` varchar(255) NOT NULL,
  `cityid` int(155) NOT NULL,
  `youtube_link` varchar(255) NOT NULL,
  `fb_link` varchar(255) NOT NULL,
  `insta_link` varchar(255) NOT NULL,
  `cover_urlname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblguider`
--

INSERT INTO `tblguider` (`guiderid`, `uid`, `nick_name`, `cover_photo`, `bio`, `cityid`, `youtube_link`, `fb_link`, `insta_link`, `cover_urlname`) VALUES
(1, 5, 'pdz_gaming', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/GuiderImg%2Fpdz_gaming.jpg?alt=media&token=4008ddbe-7637-461c-b223-0ac069de1cb2', 'Cs go lover...!', 10, 'psd_wrld', 'prem_d56', 'psd_125', 'GuiderImg/pdz_gaming.jpg'),
(2, 6, 'jenn_123', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/GuiderImg%2Fjenn_123.jpg?alt=media&token=9a487781-6119-4631-a55d-a7bf2375fb41', 'Support LGBTQ', 11, 'jen_yt_764', 'fb_jen124', 'insta_jen_123', 'GuiderImg/jenn_123.jpg'),
(3, 7, 'tebby_boi', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/GuiderImg%2Ftebby_boi.jpg?alt=media&token=5736d4d5-3168-476e-b1d7-35db21ceba0d', 'Food lover \nworld class error solver', 15, 'tebby_thala', 'tebby_lal', 'tebby_for_a_reason', 'GuiderImg/tebby_boi.jpg'),
(4, 2, 'harish_lal', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/GuiderImg%2Fharish_lal.jpg?alt=media&token=023c3f1e-771b-4a79-8838-ad94aba36148', 'Food Blogger', 13, 'hari_bhai', 'hari_boss', 'son_of _lion', 'GuiderImg/harish_lal.jpg'),
(5, 8, 'mann_goswami', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/GuiderImg%2Fmann_goswami.jpg?alt=media&token=5ec12fb7-4574-4b4f-bb6f-e2b482fa4c11', 'Apple Lover....\nnot fruit', 9, 'maan_123', 'mann_897', 'its_me_mann', 'GuiderImg/mann_goswami.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tblplace`
--

CREATE TABLE `tblplace` (
  `placeid` int(50) NOT NULL,
  `place_name` varchar(255) NOT NULL,
  `category_id` int(55) NOT NULL,
  `pdescription` varchar(5000) NOT NULL,
  `cityid` int(255) NOT NULL,
  `c_url` varchar(555) NOT NULL,
  `c_urlname` varchar(255) NOT NULL,
  `placeImgUrls` varchar(2000) NOT NULL,
  `maps` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblplace`
--

INSERT INTO `tblplace` (`placeid`, `place_name`, `category_id`, `pdescription`, `cityid`, `c_url`, `c_urlname`, `placeImgUrls`, `maps`) VALUES
(1, 'Suvali Beach', 3, 'Suvali Beach, located near Surat in the Indian state of Gujarat, is a serene coastal haven that combines natural beauty with a tranquil atmosphere. Unlike its more famous neighbor, Dumas Beach, Suvali is known for its pristine and relatively untouched env', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Suvali%20Beach%2Fsuvali%20beach_C.jpg?alt=media&token=cd276cff-9f90-4074-87fb-6fcd550bcfa8', 'suvali beach_C.jpg', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Suvali%20Beach%2Fsuvali%20beach_1.jpg?alt=media&token=fec82471-ff8f-4db2-9658-4603cf2e5048 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Suvali%20Beach%2Fsuvali%20beach_2.jpg?alt=media&token=ec955a72-9cd9-45dd-a3d7-4f7574bc3fa3 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Suvali%20Beach%2Fsuvali%20beach_3.jpg?alt=media&token=97f36ef0-a6b9-4cbf-98ed-fa7f27fcd208', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29765.6588452762!2d72.58259831083984!3d21.1640414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be1b3045f8c8ead%3A0x7f9626cc3db0fee5!2sSuvali%20Beach!5e0!3m2!1sen!2sin!4v1709816716249!5m2!1sen!2'),
(2, 'Dumas Beach', 3, 'Dumas Beach, situated along the Arabian Sea near Surat in the Indian state of Gujarat, is a picturesque coastal destination known for its unique blend of natural beauty and mystique. This enchanting beach stretches along the Gujarat coastline, offering visitors a serene and tranquil escape from the hustle and bustle of everyday life.\n\nDumas Beach is renowned for its long stretches of golden sands, gently caressed by the ebb and flow of the Arabian Sea. The rhythmic sound of the waves crashing against the shore creates a soothing melody that adds to the calming atmosphere of the beach. The shoreline provides an ideal setting for leisurely strolls, with the cool ocean breeze and the warm touch of the sand beneath one\'s feet creating a sensory experience like no other.\n\nOne of the remarkable features of Dumas Beach is its black sand, a natural phenomenon that has captivated the curiosity of locals and tourists alike. Legend has it that the beach is haunted, with tales of eerie whispers and paranormal activities during the night. While these stories contribute to the beach\'s mystique, Dumas is equally renowned for its breathtaking sunsets. As the sun descends on the horizon, casting a warm glow over the Arabian Sea, visitors are treated to a spectacle of colors that paint the sky in hues of orange, pink, and purple.\n\nDumas Beach is not only a scenic retreat but also a cultural hub. The beach is dotted with food stalls offering a delectable array of local delicacies, allowing visitors to savor the flavors of Gujarat. It\'s a popular spot for families and friends to gather, enjoying picnics or engaging in water sports and recreational activities.\n\nNature enthusiasts will appreciate the diverse marine life found in the tidal pools and rocky formations along the shore. The beach attracts a variety of migratory birds, making it a haven for birdwatchers. For those seeking a bit of adventure, camel rides are available, providing a unique perspective of the coastal landscape.\n\nIn essence, Dumas Beach is a harmonious blend of natural allure, cultural richness, and a touch of the mysterious. Whether you\'re seeking relaxation by the sea, a taste of local culture, or a thrilling encounter with the unknown, Dumas Beach invites you to immerse yourself in its captivating charm.', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Dumas%20Beach%2Fdumas%20beach_C.jpg?alt=media&token=1db4ed2d-81c2-4f39-a7f5-cb415805d30a', 'dumas beach_C.jpg', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Dumas%20Beach%2Fdumas%20beach_1.jpg?alt=media&token=5b36b9ac-871f-4011-aa1f-c59c8e45f094 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Dumas%20Beach%2Fdumas%20beach_2.jpg?alt=media&token=7eead545-beca-47d0-87b5-9164d207e411 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Dumas%20Beach%2Fdumas%20beach_3.jpg?alt=media&token=f4986ef6-8582-4a81-8649-85f7e0155e0a', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14890.616559282014!2d72.70158632987435!3d21.08647156023775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0533302a63a7f%3A0x6d86e327f98bb542!2sDumas%20Beach!5e0!3m2!1sen!2sin!4v1709816644591!5m'),
(3, 'Dandi Beach', 3, 'Dandi Beach, situated along the western coast of India in the state of Gujarat, stands as a serene and historically significant stretch of coastline that has captured the essence of India\'s struggle for independence. Spanning approximately 21 kilometers along the Arabian Sea, Dandi Beach boasts golden sands, tranquil waves, and a picturesque landscape that draws both locals and tourists seeking a peaceful escape.\n\nWhat sets Dandi Beach apart is its pivotal role in the Indian independence movement. The beach gained international prominence during the famous Salt March led by Mahatma Gandhi in 1930. This historic event marked a turning point in India\'s fight against British colonial rule, as Gandhi and a group of followers marched from Sabarmati Ashram to Dandi, covering a distance of 240 miles. Upon reaching Dandi Beach, Gandhi ceremoniously violated the salt laws imposed by the British, symbolizing the beginning of the nonviolent civil disobedience movement.\n\nToday, Dandi Beach serves as a living monument to this significant chapter in India\'s history. Visitors can explore the Salt Satyagraha Memorial, a museum and sculpture dedicated to the Salt March and its participants. The memorial stands as a testament to the sacrifices made by those who sought to break free from the shackles of colonial oppression.\n\nApart from its historical significance, Dandi Beach offers a tranquil escape for beach enthusiasts. The gentle lapping of the Arabian Sea against the shore creates a soothing atmosphere, ideal for leisurely strolls along the expansive coastline. The soft sands provide a perfect setting for relaxation, picnics, and enjoying breathtaking sunsets over the Arabian Sea.\n\nNature enthusiasts will appreciate the coastal ecosystem surrounding Dandi Beach, where migratory birds, marine life, and vibrant flora contribute to the area\'s biodiversity. The beach is also a haven for those seeking solitude, as its less crowded ambiance provides a stark contrast to more commercialized coastal destinations.\n\nWhether one is drawn to Dandi Beach for its historical significance, natural beauty, or a blend of both, this stretch of coastline stands as a symbol of resilience, peaceful resistance, and the enduring spirit of a nation striving for freedom. As visitors explore the sun-kissed shores and absorb the echoes of India\'s independence movement, Dandi Beach remains a poignant reminder of the nation\'s rich heritage and the sacrifices made for the pursuit of liberty.', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Dandi%20Beach%2Fdandi%20beach_C.jpg?alt=media&token=a08f3498-569f-4afc-a679-b8538550dfea', 'dandi beach_C.jpg', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Dandi%20Beach%2Fdandi%20beach_1.jpg?alt=media&token=a0b6e4b7-3121-4871-b081-9c2051b6888f , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Dandi%20Beach%2Fdandi%20beach_2.jpg?alt=media&token=8eacc610-fd65-4e19-a211-04cbc762f3e6 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Dandi%20Beach%2Fdandi%20beach_3.jpg?alt=media&token=b466aec5-73d8-41ec-adbf-ee5d0105d6c6', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.6395206792604!2d72.79456132387168!3d20.886575092649675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0feb194e9d281%3A0xc36e133082b23e4d!2sDandi%20Beach!5e0!3m2!1sen!2sin!4v1709816576162!5'),
(4, 'Ubarat Beach', 3, 'Umbharat Beach also known as Umbharat Beach is a beach along the Arabian Sea situated near Navsari of Surat in Gujarat, India. The black sand beach lies 50 kilometres from the centre of Surat.As of my last knowledge update in January 2022, I don\'t have specific information about a place called \"Bokketo Cafe.\" Since I lack real-time internet access and updates, I\'ll create a fictional description for your request:  Nestled in the heart of a vib', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Ubarat%20Beach%2Fubarat%20beach_C.jpg?alt=media&token=f2af2d7c-5cbf-4184-9e2e-6b16f13f1bb1', 'ubarat beach_C.jpg', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Ubarat%20Beach%2Fubarat%20beach_1.jpg?alt=media&token=88923c10-40dc-465f-9798-1210c1efb292 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Ubarat%20Beach%2Fubarat%20beach_2.jpg?alt=media&token=f609ac62-ccb5-4ac2-a29e-087a022e18e3 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Ubarat%20Beach%2Fubarat%20beach_3.jpg?alt=media&token=7d2dd1f6-6dbb-438a-a3ac-b2930be5237f', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14897.014706211045!2d72.70977240395558!3d21.022533434817973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be054e715555555%3A0xbf85e9806d6ca5fd!2sUbhrat%20Beach!5e0!3m2!1sen!2sin!4v1709816883232!'),
(5, 'Bokketo Cafe', 8, 'Best restaurant and cafe in surat for friends to catch up and celebrate special occasions with friends and loved ones.\n\nGet our Location\n\nHome\nAbout us\nTerms and conditions\nRefund Policy\nPrivacy Policy\nContact Us\nCall +919099957110\nrestaurant', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Bokketo%20Cafe%2Fbokketo%20cafe_C.jpg?alt=media&token=e9b0cd1f-0843-4499-aadd-f340a4c9d416', 'bokketo cafe_C.jpg', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Bokketo%20Cafe%2Fbokketo%20cafe_1.jpg?alt=media&token=1c8b92e2-e2ad-48df-b98d-260276943979 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Bokketo%20Cafe%2Fbokketo%20cafe_2.jpg?alt=media&token=aeceb0ee-a5aa-4b19-825c-1f654cea67ad , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Bokketo%20Cafe%2Fbokketo%20cafe_3.jpg?alt=media&token=84a63f7d-37c1-4c01-93c9-de4eaae5c1d2', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.52738695984!2d72.74127247503442!3d21.131400280543776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d311c096681%3A0xb0cc3465113e68d2!2sBoketto%20Restro%20%7C%20Modern%20Cafe!5e0!3m2!1sen!2sin!4v1709987513606!5m2!1sen!2sin'),
(6, 'Gallery Cafe', 8, 'Gallery Cafe, a culinary haven nestled in the heart of [City/Location], invites patrons into a unique blend of art, culture, and gastronomy. This eclectic cafe transcends traditional dining experiences, creating a vibrant space that celebrates creativity ', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Gallery%20Cafe%2Fgallery%20cafe_C.jpg?alt=media&token=adc08210-f792-435a-8609-9818890b6c94', 'gallery cafe_C.jpg', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Gallery%20Cafe%2Fgallery%20cafe_1.jpg?alt=media&token=d0c74afe-b746-4a00-b3dc-086d2b700151 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Gallery%20Cafe%2Fgallery%20cafe_2.jpg?alt=media&token=49df294d-e6ab-4327-9067-23bf9a62adfb , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Gallery%20Cafe%2Fgallery%20cafe_3.jpg?alt=media&token=4656bff3-7742-4340-835e-33cd1a1cc40c', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.9602814680225!2d72.75973907388027!3d21.15397888346854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053f59f2924b9%3A0x129a557e33717ead!2sThe%20Gallery%20Cafe!5e0!3m2!1sen!2sin!4v170997070'),
(7, 'Kaffyn Cafe', 8, 'Nestled in the heart of [City/Location], Kaffyn Cafe stands as a charming retreat for coffee enthusiasts and culinary aficionados alike. This cozy haven invites patrons into a world where the aroma of freshly brewed coffee mingles with the warm ambiance, ', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Kaffyn%20Cafe%2Fkaffyn%20cafe_C.jpg?alt=media&token=31d8b231-6bb6-4242-9004-461934b68a17', 'kaffyn cafe_C.jpg', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Kaffyn%20Cafe%2Fkaffyn%20cafe_1.jpg?alt=media&token=8f732532-c339-4231-a9b6-8e90a86e7729 , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Kaffyn%20Cafe%2Fkaffyn%20cafe_2.jpg?alt=media&token=cc5b64f9-f50e-450e-b475-3e24049a29eb , https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Kaffyn%20Cafe%2Fkaffyn%20cafe_3.jpg?alt=media&token=d9fdab2b-c047-4eba-9bd3-9b5576dca50b', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.177375179898!2d72.78409867388002!3d21.145338283766925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053508fd63735%3A0x59c093fd345f8383!2sKaffyn!5e0!3m2!1sen!2sin!4v1709970770985!5m2!1sen!');

-- --------------------------------------------------------

--
-- Table structure for table `tblreview`
--

CREATE TABLE `tblreview` (
  `reviewid` int(11) NOT NULL,
  `placeid` int(50) NOT NULL,
  `uid` int(50) NOT NULL,
  `rating` float NOT NULL,
  `review` varchar(500) NOT NULL,
  `review_date_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblreview`
--

INSERT INTO `tblreview` (`reviewid`, `placeid`, `uid`, `rating`, `review`, `review_date_time`) VALUES
(1, 1, 1, 3, 'bkhbvkefe', '2024-03-13'),
(2, 2, 5, 3, 'Amazing Beach', '2024-03-18'),
(3, 7, 5, 4, 'amazing cafe', '2024-03-19'),
(4, 4, 5, 4, 'amazing wonderfull ', '2024-03-20'),
(5, 2, 5, 3, 'Good', '2024-03-20');

-- --------------------------------------------------------

--
-- Table structure for table `tblstate`
--

CREATE TABLE `tblstate` (
  `sid` int(11) NOT NULL,
  `sname` varchar(200) NOT NULL,
  `cid` int(11) NOT NULL,
  `surl` varchar(500) NOT NULL,
  `surlname` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblstate`
--

INSERT INTO `tblstate` (`sid`, `sname`, `cid`, `surl`, `surlname`) VALUES
(2, 'Gujarat', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fgujarat.jpg?alt=media&token=46e02d54-52a6-4c74-bbca-9334bfcba752', 'gujarat.jpg'),
(3, 'Rajasthan', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Frajasthan.jpg?alt=media&token=c24a6b5b-3494-4d20-a315-82a4cf977b40', 'rajasthan.jpg'),
(4, 'Assam', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fassam.jpg?alt=media&token=a0ba36a8-ab02-4b5f-93e4-426d6eef6379', 'assam.jpg'),
(5, 'Uttrakhand', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Futtrakhand.jpg?alt=media&token=5f13b581-50a1-4e32-bb6c-295c053def8e', 'uttrakhand.jpg'),
(6, 'Bihar', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbihar.jpg?alt=media&token=101d6fee-11a7-455a-b3de-0881eaec5831', 'bihar.jpg'),
(7, 'Goa', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fgoa.jpg?alt=media&token=51614679-bf3c-4584-87d4-b127303b014c', 'goa.jpg'),
(8, 'Punjab', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fpunjab.jpg?alt=media&token=2d29e6a8-dfd1-4523-a77c-db3e5424a372', 'punjab.jpg'),
(9, 'Maharastra', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fmaharastra.jpg?alt=media&token=fa6c8d03-e674-41c1-b103-c9a4863c1081', 'maharastra.jpg'),
(10, 'Jammu and Kashmir', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fjammuandkashmir.jpg?alt=media&token=7941c9f7-af35-4db0-8961-7757714099dd', 'jammuandkashmir.jpg'),
(11, 'Uttar Pradesh', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Futtarpradesh.jpg?alt=media&token=e191f873-dff0-4962-9da5-69325841a603', 'uttarpradesh.jpg'),
(12, 'Kerala', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fkerala.jpg?alt=media&token=880868af-0e77-4a75-a0e4-310385511e7d', 'kerala.jpg'),
(13, 'Tamil Nadu', 3, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Ftamilnadu.jpg?alt=media&token=6db261dd-4873-4ed9-b77c-2b082acc1b3c', 'tamilnadu.jpg'),
(14, 'California', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fcalifornia.jpg?alt=media&token=a459285c-df8a-4bb8-b6f4-f50bfe410434', 'california.jpg'),
(15, 'Alaska', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Falaska.jpg?alt=media&token=b0e00b15-10f9-49cb-9a9f-6c8a8956c106', 'alaska.jpg'),
(16, 'Hawaii', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fhawaii.jpg?alt=media&token=9e82cdac-565e-4366-8bfd-6dd706370621', 'hawaii.jpg'),
(17, 'Texas', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Ftexas.jpg?alt=media&token=0fabce13-b565-48d9-8f86-f5bbbb76fabb', 'texas.jpg'),
(18, 'New Jersey', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fnewjersey.jpg?alt=media&token=aa5d036c-fdd5-4a6c-9c65-9de397576235', 'newjersey.jpg'),
(19, 'Banten', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbanten.jpg?alt=media&token=44585d28-2d44-46d1-8c32-04e46b4d9bc5', 'banten.jpg'),
(21, 'Aceh', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Faceh.jpg?alt=media&token=f5476c1f-c122-4934-9b9b-b8d98d907d06', 'aceh.jpg'),
(22, 'Bali', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbali.jpg?alt=media&token=c5742031-86fd-454e-81e1-3698fe7fda86', 'bali.jpg'),
(23, 'Bangkulu', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbangkulu.jpg?alt=media&token=43434714-703b-45c4-8a59-eee3906b85e5', 'bangkulu.jpg'),
(24, 'Bangka Belitung', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbangkabelitung.jpg?alt=media&token=e4317673-9239-4073-8cbb-c3a5f51e61ae', 'bangkabelitung.jpg'),
(25, 'Gorontalo', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fgorontalo.jpg?alt=media&token=4979fcfe-2a6e-46d4-82e0-91f68a2e5866', 'gorontalo.jpg'),
(26, 'Jawa barat', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fjawabarat.jpg?alt=media&token=ac46569c-3e9a-431d-b3b6-f67be4244652', 'jawabarat.jpg'),
(27, 'Jawa Timur', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fjawatimur.jpg?alt=media&token=a664d1e0-86cb-4d62-a1aa-7ee94dbb9cc7', 'jawatimur.jpg'),
(28, 'Kalimantan Tengah', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fkalimantantengah.jpg?alt=media&token=975f9e8b-79f8-45bc-8e7a-23f02d1a16c1', 'kalimantantengah.jpg'),
(29, 'Lampung', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Flampung.jpg?alt=media&token=1d617992-829b-4141-98d1-8609dd341f5d', 'lampung.jpg'),
(30, 'Maluku', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fmaluku.jpg?alt=media&token=f9dd5c56-6822-4920-8778-20003343e696', 'maluku.jpg'),
(31, 'Papua', 1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fpapua.jpg?alt=media&token=c16bafda-1279-44ac-b8c2-37aa0284d655', 'papua.jpg'),
(32, 'Dubai', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fdubai.jpg?alt=media&token=a839f637-e843-4291-800f-feb3e17082bd', 'dubai.jpg'),
(33, 'Abu Dhabi', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fabudhabi.jpg?alt=media&token=7f1191ba-e9ff-4287-9341-c95d1523b835', 'abudhabi.jpg'),
(34, 'Sharjah', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fsharjah.jpg?alt=media&token=27d70a91-3c22-49c3-ad0c-665d1f333499', 'sharjah.jpg'),
(35, 'Ajman', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fajman.jpg?alt=media&token=2535c253-a41b-4bc3-b4eb-5d48bd662447', 'ajman.jpg'),
(36, 'Ras al-Khaimah', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Frasal-khaimah.jpg?alt=media&token=b1df018e-5143-4d9a-a9b9-3208f82463a1', 'rasal-khaimah.jpg'),
(37, 'Fujairah', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Ffujairah.jpg?alt=media&token=0485c5f7-40d8-4b1a-ae63-d41aa3727f1e', 'fujairah.jpg'),
(38, 'Umm al-Quwain', 7, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fummal-quwain.jpg?alt=media&token=46f1bf9d-3c2e-4092-9c8e-ae902cda9b7f', 'ummal-quwain.jpg'),
(39, 'Gansu', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fgansu.jpg?alt=media&token=329f657d-75bb-451c-97ee-be54eeabe5ea', 'gansu.jpg'),
(40, 'Qinghai', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fqinghai.jpg?alt=media&token=bcf97e4c-eaae-46d5-8fc3-eb0339a29d1c', 'qinghai.jpg'),
(41, 'Yunnan', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fyunnan.jpg?alt=media&token=d8cc26ee-fb3d-4946-a3b1-670c95a0f1d3', 'yunnan.jpg'),
(42, 'Hubei', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fhubei.jpg?alt=media&token=450a3eab-1389-4af5-845e-9e3da778cff0', 'hubei.jpg'),
(43, 'Hunan', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fhunan.jpg?alt=media&token=b8d15f05-0d4e-4ff1-93d3-20fc90b870e4', 'hunan.jpg'),
(44, 'Shannxi', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fshannxi.jpg?alt=media&token=1321f5da-287f-41a3-a31f-807971519f01', 'shannxi.jpg'),
(45, 'Sichuan', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fsichuan.jpg?alt=media&token=dbd78cc0-cbbb-49e5-88fb-acf06eb98574', 'sichuan.jpg'),
(46, 'Heilongjiang', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fheilongjiang.jpg?alt=media&token=983f35a3-a9b5-42e3-bba6-cc69aa0e30ac', 'heilongjiang.jpg'),
(47, 'Jilin', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fjilin.jpg?alt=media&token=5f2367d1-4962-4442-afe2-b06f25888a47', 'jilin.jpg'),
(48, 'Guangdong', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fguangdong.jpg?alt=media&token=37292031-d016-4af6-821d-8e1320ced05f', 'guangdong.jpg'),
(49, 'Guizhou', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fguizhou.jpg?alt=media&token=62838398-a6a4-4c46-b222-deaaab098843', 'guizhou.jpg'),
(50, 'Taiwan', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Ftaiwan.jpg?alt=media&token=cdbe523b-7a8c-41be-bfe7-01f638544eaa', 'taiwan.jpg'),
(51, 'Washington', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fwashington.jpg?alt=media&token=acbd2d05-1af5-4e83-9773-bda4117c4e17', 'washington.jpg'),
(52, 'Kansas', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fkansas.jpg?alt=media&token=669cab7e-2c06-41b3-952d-38e457716bab', 'kansas.jpg'),
(53, 'Florida', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fflorida.jpg?alt=media&token=60088cad-627e-4e00-bc8b-d0ebac059172', 'florida.jpg'),
(54, 'Missouri', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fmissouri.jpg?alt=media&token=e844f3fa-1aad-4585-bc6b-6c75a894e219', 'missouri.jpg'),
(55, 'Georgia', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fgeorgia.jpg?alt=media&token=b607a59f-167c-49c4-81b3-5f99ae527b46', 'georgia.jpg'),
(56, 'New York', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fnewyork.jpg?alt=media&token=d2aaeb17-5c98-4e9f-93bc-5463c9da721e', 'newyork.jpg'),
(57, 'Tennessee', 2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Ftennessee.jpg?alt=media&token=31ce3495-b192-4bdd-901f-b28c29816fe2', 'tennessee.jpg'),
(59, 'Western Australia', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fwesternaustralia.jpg?alt=media&token=621e1fdd-f191-4e6e-a3d3-567703b718e1', 'westernaustralia.jpg'),
(60, 'Victoria', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fvictoria.jpg?alt=media&token=1af107b2-78ed-496a-bc7c-a116a5363f7c', 'victoria.jpg'),
(61, 'South Australia', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fsouthaustralia.jpg?alt=media&token=0a6a52c7-f968-4a9b-b90f-b8b1d8d1b044', 'southaustralia.jpg'),
(62, 'New South Wales', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fnewsouthwales.jpg?alt=media&token=4a1164a6-a3ac-4d0b-a32b-355da0b4aff7', 'newsouthwales.jpg'),
(63, 'Northern Territory', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fnorthernterritory.jpg?alt=media&token=dabd491b-d9f3-4227-9e98-f4fb01b09da5', 'northernterritory.jpg'),
(64, 'Australian Capital Territory', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Faustraliancapitalterritory.jpg?alt=media&token=0308b50d-79c3-46e5-bcf3-850ddc742663', 'australiancapitalterritory.jpg'),
(65, 'Berlin', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fberlin.jpg?alt=media&token=a7bb51f0-fceb-4b0d-8ef8-0f7c8ddb2a9d', 'berlin.jpg'),
(66, 'Bayern (Bavaria)', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbayern(bavaria).jpg?alt=media&token=ddb1befc-cd9d-4772-8a26-caea2fb7bf8e', 'bayern(bavaria).jpg'),
(67, 'Niedersachsen (Lower Saxony)', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fniedersachsen(lowersaxony).jpg?alt=media&token=628a1580-be7a-445e-9ec9-ad06c404d3f4', 'niedersachsen(lowersaxony).jpg'),
(68, 'Baden-Württemberg', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbaden-w%C3%BCrttemberg.jpg?alt=media&token=20d181ab-af10-44a4-8f14-591196e2e21f', 'baden-württemberg.jpg'),
(69, 'Rheinland-Pfalz (Rhineland-Palatinate)', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Frheinland-pfalz(rhineland-palatinate).jpg?alt=media&token=71c3f155-dcbd-4dcf-959c-5926d72eb84a', 'rheinland-pfalz(rhineland-palatinate).jpg'),
(70, 'Sachsen (Saxony)', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fsachsen(saxony).jpg?alt=media&token=d864ff10-d966-4fb6-b143-23e35517cf9d', 'sachsen(saxony).jpg'),
(71, 'Thüringen (Thuringia)', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fth%C3%BCringen(thuringia).jpg?alt=media&token=79782a1e-d5f3-4af1-b4b6-f95532c91838', 'thüringen(thuringia).jpg'),
(72, 'Hessen', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fhessen.jpg?alt=media&token=eeb437b3-bc2f-4a60-a0a1-5bc49d487d98', 'hessen.jpg'),
(73, 'Nordrhein-Westfalen (North Rhine-Westphalia)', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fnordrhein-westfalen(northrhine-westphalia).jpg?alt=media&token=3db634ce-8ebc-4386-b7ca-90c4175c0f32', 'nordrhein-westfalen(northrhine-westphalia).jpg'),
(74, 'Sachsen-Anhalt (Saxony-Anhalt)', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fsachsen-anhalt(saxony-anhalt).jpg?alt=media&token=c35dfba8-5cc6-4060-ae80-02aa8af12dd8', 'sachsen-anhalt(saxony-anhalt).jpg'),
(75, 'Brandenburg', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbrandenburg.jpg?alt=media&token=ec710720-e62f-4ecd-9e1a-4f5a4db4615d', 'brandenburg.jpg'),
(76, 'Mecklenburg-Vorpommern', 6, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fmecklenburg-vorpommern.jpg?alt=media&token=2c8662e4-f1e8-4374-a0c9-fb22e93f964d', 'mecklenburg-vorpommern.jpg'),
(77, 'Ad Daqahliyah ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Faddaqahliyah.jpg?alt=media&token=23ee01ba-6206-42d9-b26a-ca67f46e25f1', 'addaqahliyah.jpg'),
(78, 'Al Bahr Al Ahmar ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Falbahralahmar.jpg?alt=media&token=b76fc952-a3d8-49ba-823e-3b85c542f186', 'albahralahmar.jpg'),
(79, 'Asyut ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fasyut.jpg?alt=media&token=7edd6a84-c2a2-4c9f-b3ab-771d17abebfd', 'asyut.jpg'),
(80, 'Aswan ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Faswan.jpg?alt=media&token=c8d90323-016e-459a-b1dc-29b2fd251e69', 'aswan.jpg'),
(81, 'Dumyat ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fdumyat.jpg?alt=media&token=c64c193a-e7e9-40d4-846f-4f44e900e391', 'dumyat.jpg'),
(82, 'Matruh', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fmatruh.jpg?alt=media&token=82a48514-b4fc-4bfc-8af7-d39fd7a33595', 'matruh.jpg'),
(83, 'Suhaj', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fsuhaj.jpg?alt=media&token=b17e7c11-1c86-484f-a6cf-1f19aee29853', 'suhaj.jpg'),
(84, 'Al Minya ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Falminya.jpg?alt=media&token=8461f3b4-7638-4ae0-bbfa-1702acb192d9', 'alminya.jpg'),
(85, 'Al Fayyum ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Falfayyum.jpg?alt=media&token=fa2f16d7-816b-4f3c-a777-d64d11cd6cdc', 'alfayyum.jpg'),
(86, 'Al Jizah ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Faljizah.jpg?alt=media&token=1b624b5a-440b-42f9-b727-25a303bec5fb', 'aljizah.jpg'),
(87, 'Al Qahirah ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Falqahirah.jpg?alt=media&token=882168d0-bf80-435a-affa-55d108e337a2', 'alqahirah.jpg'),
(88, 'Ash Sharqiyah ', 8, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fashsharqiyah.jpg?alt=media&token=2f34189f-f414-4ce7-b54c-337591d942df', 'ashsharqiyah.jpg'),
(89, 'Queensland', 4, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fqueensland.jpg?alt=media&token=b15d8bdd-c2f7-4728-9b32-3b5af02a8d8c', 'queensland.jpg'),
(90, 'Aberdeen', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Faberdeen.jpg?alt=media&token=73275358-16cc-4d15-85be-27599583e17e', 'aberdeen.jpg'),
(91, 'Belfast', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbelfast.jpg?alt=media&token=06eb2970-5019-4df8-82f8-337642b91d94', 'belfast.jpg'),
(92, 'Cambridgeshire', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fcambridgeshire.jpg?alt=media&token=3767b883-f64b-4ecf-ba88-b6964cf15f26', 'cambridgeshire.jpg'),
(93, 'Derry', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fderry.jpg?alt=media&token=113ad9d6-fe47-4725-b30e-1df844b8a56d', 'derry.jpg'),
(94, 'Kent', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fkent.jpg?alt=media&token=d864b596-ed72-4dd5-bddb-e07ce2913e92', 'kent.jpg'),
(95, 'Lancashire', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Flancashire.jpg?alt=media&token=020ac7bb-fe76-4b2c-8e82-65b1f1ed0a7d', 'lancashire.jpg'),
(96, 'Manchester', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fmanchester.jpg?alt=media&token=d89f5296-1749-4796-9739-71ac456dae17', 'manchester.jpg'),
(97, 'North Yorkshire', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fnorthyorkshire.jpg?alt=media&token=91dbb026-5635-48dc-9c48-2344bef54c5a', 'northyorkshire.jpg'),
(98, 'Oxfordshire', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Foxfordshire.jpg?alt=media&token=64682fdf-339e-4815-a57a-47066747d95b', 'oxfordshire.jpg'),
(99, 'Peterborough', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fpeterborough.jpg?alt=media&token=c9e2196d-0ae3-4c12-a7f9-d93fe367efb3', 'peterborough.jpg'),
(100, 'Brighton And Hove', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbrightonandhove.jpg?alt=media&token=0071c1d6-19ba-4fce-8c37-28707005bb20', 'brightonandhove.jpg'),
(101, 'Bristol', 9, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbristol.jpg?alt=media&token=fbde089c-ff46-4935-b846-8b113988280f', 'bristol.jpg'),
(102, 'Barisal', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fbarisal.jpg?alt=media&token=1763e1c2-54e2-49e1-a42b-c3d9153662a3', 'barisal.jpg'),
(103, 'Chittagong', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fchittagong.jpg?alt=media&token=7171d63f-1b1e-42cb-bac6-5e59c8de0e85', 'chittagong.jpg'),
(104, 'Dhaka', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fdhaka.jpg?alt=media&token=82abcf2a-4859-4ea8-a379-d71ce2850ad3', 'dhaka.jpg'),
(105, 'Khulna ', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fkhulna.jpg?alt=media&token=3f2702a1-c620-41b6-902b-fbada78b1131', 'khulna.jpg'),
(106, 'Rajshahi', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Frajshahi.jpg?alt=media&token=fe4b6370-d03b-4249-a6fa-40b7a0eafc37', 'rajshahi.jpg'),
(107, 'Sylhet ', 10, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fsylhet.jpg?alt=media&token=576491ef-0cd3-4e91-953c-3eb1496d53ad', 'sylhet.jpg'),
(108, 'Ad Dakhiliyah', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Faddakhiliyah.jpg?alt=media&token=ecb2ee30-4cd6-4f47-9f73-a39f1f82ef2f', 'addakhiliyah.jpg'),
(109, 'Al Dhahirah', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Faldhahirah.jpg?alt=media&token=1f5c2474-1857-467b-bfca-7fdc1f216f59', 'aldhahirah.jpg'),
(110, 'Al Batinah North', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Falbatinahnorth.jpg?alt=media&token=b918f8b3-71f3-4bff-98bd-225641d3dea2', 'albatinahnorth.jpg'),
(111, 'Al Batinah South', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Falbatinahsouth.jpg?alt=media&token=274f9033-1fad-48df-9498-395436ea6f87', 'albatinahsouth.jpg'),
(112, 'Al Buraimi', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Falburaimi.jpg?alt=media&token=5b819ce2-2c62-49cc-bc62-edc17432ae0b', 'alburaimi.jpg'),
(113, 'Al Wusta ', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Falwusta.jpg?alt=media&token=63feba3a-1422-4c3b-95a4-fd809268a569', 'alwusta.jpg'),
(114, 'Ash Sharqiyah North', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fashsharqiyahnorth.jpg?alt=media&token=add66527-be4b-4979-a43a-b41a2d42c06f', 'ashsharqiyahnorth.jpg'),
(115, 'Ash Sharqiyah South', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fashsharqiyahsouth.jpg?alt=media&token=10028b8d-df3f-4e3a-8ff4-384832dba8d0', 'ashsharqiyahsouth.jpg'),
(116, 'Dhofar', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fdhofar.jpg?alt=media&token=24fc6f9b-db78-4c18-b8b0-289b17f26bf5', 'dhofar.jpg'),
(117, 'Muscat', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fmuscat.jpg?alt=media&token=88820fbe-a1cd-4b55-b56b-6a7d7fa26818', 'muscat.jpg'),
(118, 'Musandam', 11, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fmusandam.jpg?alt=media&token=59cedc1b-5475-4072-941f-98e17a3c3a83', 'musandam.jpg'),
(119, 'Rakhine State', 12, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Frakhinestate.jpg?alt=media&token=84b345a8-d46c-4bf3-8929-a53344b736bd', 'rakhinestate.jpg'),
(120, 'Kayin State', 12, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fkayinstate.jpg?alt=media&token=56d10081-e2ac-4397-9425-df231885c928', 'kayinstate.jpg'),
(121, 'Kachin State', 12, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fkachinstate.jpg?alt=media&token=88a3b6d1-6f3b-48bc-9ebf-d36d2bc3e7e2', 'kachinstate.jpg'),
(122, 'Chin State', 12, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fchinstate.jpg?alt=media&token=7798ab54-0156-49aa-9ff3-3bbeb5474b15', 'chinstate.jpg'),
(123, 'Tanintharyi Region', 12, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Ftanintharyiregion.jpg?alt=media&token=897ce966-801f-4a20-ae3a-f89c0c90cf00', 'tanintharyiregion.jpg'),
(124, 'Tanger-Tétouan-Al Hoceima', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Ftanger-t%C3%A9touan-alhoceima.jpg?alt=media&token=518d7f10-c128-4293-9d41-85c7ae3a3997', 'tanger-tétouan-alhoceima.jpg'),
(125, 'Oriental', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Foriental.jpg?alt=media&token=f48c5007-eafa-42e4-a31b-c569865a3d0a', 'oriental.jpg'),
(126, 'Fès-Meknès', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Ff%C3%A8s-mekn%C3%A8s.jpg?alt=media&token=c1190a49-6d46-42de-9a86-b20f5c3bdcbf', 'fès-meknès.jpg'),
(127, 'Rabat-Salé-Kénitra', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Frabat-sal%C3%A9-k%C3%A9nitra.jpg?alt=media&token=ebed6e9e-b3f4-483f-a39d-54c8e26769ac', 'rabat-salé-kénitra.jpg'),
(128, 'Béni Mellal-Khénifra', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fb%C3%A9nimellal-kh%C3%A9nifra.jpg?alt=media&token=0ab9a8f0-cb82-48a6-be35-c6e72c74d3dc', 'bénimellal-khénifra.jpg'),
(129, 'Casablanca-Settat', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fcasablanca-settat.jpg?alt=media&token=d3b26154-1e2d-4c7e-9d43-4f2bed65d1d9', 'casablanca-settat.jpg'),
(130, 'Marrakech-Safi', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fmarrakech-safi.jpg?alt=media&token=d1254849-e2e4-489d-93f3-812f6a16d51a', 'marrakech-safi.jpg'),
(131, 'Drâa-Tafilalet', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fdr%C3%A2a-tafilalet.jpg?alt=media&token=5e9b3609-840a-409d-b14d-5a982fa90baa', 'drâa-tafilalet.jpg'),
(132, 'Souss-Massa', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fsouss-massa.jpg?alt=media&token=bf3c7e92-9d58-4cf1-81f5-fbcd1de16cf2', 'souss-massa.jpg'),
(133, 'Guelmim-Oued Noun', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fguelmim-ouednoun.jpg?alt=media&token=39c89931-3b7a-4637-8161-0deda91ca9ad', 'guelmim-ouednoun.jpg'),
(134, 'Laâyoune-Sakia El Hamra', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fla%C3%A2youne-sakiaelhamra.jpg?alt=media&token=3362c6ba-6758-4153-9288-ad38b4fb3a32', 'laâyoune-sakiaelhamra.jpg'),
(1, 'Dakhla-Oued Ed-Dahab', 13, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/stateimg%2Fdakhla-oueded-dahab.jpg?alt=media&token=11cc7ceb-93ef-4325-b59f-25d6260f6554', 'dakhla-oueded-dahab.jpg'),
(0, 'asam', 5, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fasam.jpg?alt=media&token=ff03b054-15f1-4c35-89dd-86db8646951b', 'Uimgasam.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `uid` int(11) NOT NULL,
  `uname` varchar(200) NOT NULL,
  `pwd` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `status` varchar(100) NOT NULL,
  `reg_date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `utype` varchar(100) NOT NULL,
  `url` varchar(500) NOT NULL,
  `urlname` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`uid`, `uname`, `pwd`, `email`, `status`, `reg_date_time`, `utype`, `url`, `urlname`) VALUES
(1, 'dhruv', 'dhruv12', 'dhruv12@gmail.com', 'false', '2024-03-20 11:37:00', 'Visitor', 'https://firebasestorage.googleapis.com/v0/b/finalimg-e4ab4.appspot.com/o/Uimg%2Fdhruv.jpg?alt=media&token=5d372dbd-1668-4beb-9253-e9f96a384741', 'Uimgdhruv.jpg'),
(2, 'harnish', 'harnish12', 'harnish34@gmail.com', 'false', '2024-03-20 12:23:33', 'Guider', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fharnish.jpg?alt=media&token=033d9aa7-b34b-4bae-b0b5-8cdd6a0d9662', 'Uimgharnish.jpg'),
(5, 'Prem', 'prem123', 'prem@icloud.com', 'false', '2024-03-18 16:18:01', 'Guider', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fprem.jpg?alt=media&token=db21a87f-55ce-41c4-b9b6-8e6b42bdb4de', 'prem.jpg'),
(6, 'jenny patel', 'jen123', 'jen@gmail.com', 'false', '2024-03-20 12:10:02', 'Guider', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fjennypatel.jpg?alt=media&token=45528696-8204-4c26-908f-cd7f319f9637', 'jennypatel.jpg'),
(7, 'Taiyab Bhai', 'tebby123', 'tebby@gmail.com', 'false', '2024-03-20 12:13:28', 'Guider', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Ftaiyabbhai.jpg?alt=media&token=a81a34b9-e2f6-40ea-9fa0-ffca55d2db3b', 'taiyabbhai.jpg'),
(8, 'Mann Goswami', 'mann123', 'mann@icloud.com', 'false', '2024-03-20 14:28:38', 'Guider', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fmanngoswami.jpg?alt=media&token=d8ee45ad-7c41-4d26-a3ce-d7059ab87d97', 'manngoswami.jpg'),
(9, 'Vansh Mehta', 'vansh123', 'vansh@gmail.com', 'false', '2024-03-20 15:06:29', 'Visitor', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Uimg%2Fvanshmehta.jpg?alt=media&token=2a65744d-d21e-4853-88ec-a754d16eee15', 'vanshmehta.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tblvlog`
--

CREATE TABLE `tblvlog` (
  `vlogid` int(255) NOT NULL,
  `vurl` varchar(500) NOT NULL,
  `vurlname` varchar(200) NOT NULL,
  `vname` varchar(100) NOT NULL,
  `v_description` varchar(1000) NOT NULL,
  `guiderid` int(100) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `vthumbnail` varchar(500) NOT NULL,
  `v_thumbnail_urlname` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblvlog`
--

INSERT INTO `tblvlog` (`vlogid`, `vurl`, `vurlname`, `vname`, `v_description`, `guiderid`, `date_time`, `vthumbnail`, `v_thumbnail_urlname`) VALUES
(1, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Vlog%2Flasvegasfunn1710778793390%2Fvideo.mp4?alt=media&token=294e6990-e69f-4993-a6be-4deccb81061e', 'Vlogvideos/lasvegasfunn1710778793390/video.mp4', 'Las Vegas Funn', 'Vibrant cityscape ablaze with neon lights, beckoning casinos, extravagant shows, and endless entertainment, Las Vegas pulsates with energy, glamour, and the promise of unforgettable experiences at every turn.', 1, '2024-03-18 10:50:09', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Vlog%2Flasvegasfunn1710778793390%2Fv_thumbnail.jpg?alt=media&token=8e47db1d-cbfc-4b38-8fc1-9b040be7c285', '0'),
(2, 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Vlog%2Fshimlasnow1710936969457%2Fvideo.mp4?alt=media&token=4f4bc0aa-0a88-4be6-9c40-cd14ebd82407', 'Vlogvideos/shimlasnow1710936969457/video.mp4', 'Shimla Snow', 'Shimla, nestled in the Himalayas, charms with colonial architecture, scenic vistas, and bustling markets. A popular hill station in India, it offers a serene retreat amidst pine-clad hills and cool climate.', 3, '2024-03-20 06:46:35', 'https://firebasestorage.googleapis.com/v0/b/finalimg-ebd6d.appspot.com/o/Vlog%2Fshimlasnow1710936969457%2Fv_thumbnail.jpg?alt=media&token=cdcfa752-bfed-4b46-a423-249659005f79', 'VlogImg/shimlasnow1710936969457/v_thumbnail.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblcategory`
--
ALTER TABLE `tblcategory`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tblcity`
--
ALTER TABLE `tblcity`
  ADD PRIMARY KEY (`cityid`);

--
-- Indexes for table `tblcountry`
--
ALTER TABLE `tblcountry`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `tbldiaries`
--
ALTER TABLE `tbldiaries`
  ADD PRIMARY KEY (`diary_id`);

--
-- Indexes for table `tblfollow`
--
ALTER TABLE `tblfollow`
  ADD PRIMARY KEY (`followid`);

--
-- Indexes for table `tblguider`
--
ALTER TABLE `tblguider`
  ADD PRIMARY KEY (`guiderid`);

--
-- Indexes for table `tblplace`
--
ALTER TABLE `tblplace`
  ADD PRIMARY KEY (`placeid`);

--
-- Indexes for table `tblreview`
--
ALTER TABLE `tblreview`
  ADD PRIMARY KEY (`reviewid`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `tblvlog`
--
ALTER TABLE `tblvlog`
  ADD PRIMARY KEY (`vlogid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblcategory`
--
ALTER TABLE `tblcategory`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tblcity`
--
ALTER TABLE `tblcity`
  MODIFY `cityid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- AUTO_INCREMENT for table `tblcountry`
--
ALTER TABLE `tblcountry`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbldiaries`
--
ALTER TABLE `tbldiaries`
  MODIFY `diary_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tblfollow`
--
ALTER TABLE `tblfollow`
  MODIFY `followid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tblguider`
--
ALTER TABLE `tblguider`
  MODIFY `guiderid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tblplace`
--
ALTER TABLE `tblplace`
  MODIFY `placeid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tblreview`
--
ALTER TABLE `tblreview`
  MODIFY `reviewid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tblvlog`
--
ALTER TABLE `tblvlog`
  MODIFY `vlogid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
