import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// All stations data from the provided JSON
const allStations = [
  // Red Line
  { id: 'R01', name: 'Shaheed Sthal', line: 'Red', hindi: 'शहीद स्थल' },
  { id: 'R02', name: 'Hindon River', line: 'Red', hindi: 'हिंडन रिवर' },
  { id: 'R03', name: 'Arthala', line: 'Red', hindi: 'अर्थला' },
  { id: 'R04', name: 'Mohan Nagar', line: 'Red', hindi: 'मोहन नगर' },
  { id: 'R05', name: 'Shyam Park', line: 'Red', hindi: 'श्याम पार्क' },
  { id: 'R06', name: 'Major Mohit Sharma', line: 'Red', hindi: 'मेजर मोहित शर्मा' },
  { id: 'R07', name: 'Raj Bagh', line: 'Red', hindi: 'राज बाग' },
  { id: 'R08', name: 'Shaheed Nagar', line: 'Red', hindi: 'शहीद नगर' },
  { id: 'R09', name: 'Dilshad Garden', line: 'Red', hindi: 'दिलशाद गार्डन' },
  { id: 'R10', name: 'Jhilmil', line: 'Red', hindi: 'झिलमिल' },
  { id: 'R11', name: 'Mansarovar Park', line: 'Red', hindi: 'मानसरोवर पार्क' },
  { id: 'R12', name: 'Shahdara', line: 'Red', hindi: 'शाहदरा' },
  { id: 'R13', name: 'Welcome', line: 'Red', hindi: 'वेलकम' },
  { id: 'R14', name: 'Seelampur', line: 'Red', hindi: 'सीलमपुर' },
  { id: 'R15', name: 'Shastri Park', line: 'Red', hindi: 'शास्त्री पार्क' },
  { id: 'R16', name: 'Kashmere Gate', line: 'Red', hindi: 'कश्मीरी गेट' },
  { id: 'R17', name: 'Tis Hazari', line: 'Red', hindi: 'तिस हजारी' },
  { id: 'R18', name: 'Pul Bangash', line: 'Red', hindi: 'पुल बंगश' },
  { id: 'R19', name: 'Pratap Nagar', line: 'Red', hindi: 'प्रताप नगर' },
  { id: 'R20', name: 'Shastri Nagar', line: 'Red', hindi: 'शास्त्री नगर' },
  { id: 'R21', name: 'Inderlok', line: 'Red', hindi: 'इंदरलोक' },
  { id: 'R22', name: 'Kanhiya Nagar', line: 'Red', hindi: 'कन्हैया नगर' },
  { id: 'R23', name: 'Keshav Puram', line: 'Red', hindi: 'केशव पुरम' },
  { id: 'R24', name: 'Netaji Subhash Place', line: 'Red', hindi: 'नेताजी सुभाष प्लेस' },
  { id: 'R25', name: 'Kohat Enclave', line: 'Red', hindi: 'कोहाट एन्क्लेव' },
  { id: 'R26', name: 'Pitam Pura', line: 'Red', hindi: 'पीतम पुरा' },
  { id: 'R27', name: 'Rohini East', line: 'Red', hindi: 'रोहिणी ईस्ट' },
  { id: 'R28', name: 'Rohini West', line: 'Red', hindi: 'रोहिणी वेस्ट' },
  { id: 'R29', name: 'Rithala', line: 'Red', hindi: 'ऋताला' },

  // Yellow Line
  { id: 'Y01', name: 'Samaypur Badli', line: 'Yellow', hindi: 'समयपुर बादली' },
  { id: 'Y02', name: 'Rohini Sector 18,19', line: 'Yellow', hindi: 'रोहिणी सेक्टर 18,19' },
  { id: 'Y03', name: 'Haiderpur Badli Mor', line: 'Yellow', hindi: 'हैदरपुर बादली मोड़' },
  { id: 'Y04', name: 'Jahangirpuri', line: 'Yellow', hindi: 'जहाँगीरपुरी' },
  { id: 'Y05', name: 'Adarsh Nagar', line: 'Yellow', hindi: 'आदर्श नगर' },
  { id: 'Y06', name: 'Azadpur', line: 'Yellow', hindi: 'आजादपुर' },
  { id: 'Y07', name: 'Model Town', line: 'Yellow', hindi: 'मॉडल टाउन' },
  { id: 'Y08', name: 'GTB Nagar', line: 'Yellow', hindi: 'जीटीबी नगर' },
  { id: 'Y09', name: 'Vishwa Vidyalaya', line: 'Yellow', hindi: 'विश्व विद्यालय' },
  { id: 'Y10', name: 'Vidhan Sabha', line: 'Yellow', hindi: 'विधान सभा' },
  { id: 'Y11', name: 'Civil Lines', line: 'Yellow', hindi: 'सिविल लाइन्स' },
  { id: 'Y12', name: 'Kashmere Gate', line: 'Yellow', hindi: 'कश्मीरी गेट' },
  { id: 'Y13', name: 'Chandni Chowk', line: 'Yellow', hindi: 'चांदनी चौक' },
  { id: 'Y14', name: 'Chawri Bazar', line: 'Yellow', hindi: 'चावड़ी बाजार' },
  { id: 'Y15', name: 'New Delhi', line: 'Yellow', hindi: 'नई दिल्ली' },
  { id: 'Y16', name: 'Rajiv Chowk', line: 'Yellow', hindi: 'राजीव चौक' },
  { id: 'Y17', name: 'Patel Chowk', line: 'Yellow', hindi: 'पटेल चौक' },
  { id: 'Y18', name: 'Central Secretariat', line: 'Yellow', hindi: 'केंद्रीय सचिवालय' },
  { id: 'Y19', name: 'Udyog Bhawan', line: 'Yellow', hindi: 'उद्योग भवन' },
  { id: 'Y20', name: 'Lok Kalyan Marg', line: 'Yellow', hindi: 'लोक कल्याण मार्ग' },
  { id: 'Y21', name: 'Jor Bagh', line: 'Yellow', hindi: 'जोर बाग' },
  { id: 'Y22', name: 'INA', line: 'Yellow', hindi: 'आईएनए' },
  { id: 'Y23', name: 'AIIMS', line: 'Yellow', hindi: 'एम्स' },
  { id: 'Y24', name: 'Green Park', line: 'Yellow', hindi: 'ग्रीन पार्क' },
  { id: 'Y25', name: 'Hauz Khas', line: 'Yellow', hindi: 'हौज खास' },
  { id: 'Y26', name: 'Malviya Nagar', line: 'Yellow', hindi: 'मालवीय नगर' },
  { id: 'Y27', name: 'Saket', line: 'Yellow', hindi: 'साकेत' },
  { id: 'Y28', name: 'Qutab Minar', line: 'Yellow', hindi: 'कुतुब मीनार' },
  { id: 'Y29', name: 'Chhatarpur', line: 'Yellow', hindi: 'छत्तरपुर' },
  { id: 'Y30', name: 'Sultanpur', line: 'Yellow', hindi: 'सुल्तानपुर' },
  { id: 'Y31', name: 'Ghitorni', line: 'Yellow', hindi: 'घिटोर्नी' },
  { id: 'Y32', name: 'Arjan Garh', line: 'Yellow', hindi: 'अर्जन गढ़' },
  { id: 'Y33', name: 'Guru Dronacharya', line: 'Yellow', hindi: 'गुरु द्रोणाचार्य' },
  { id: 'Y34', name: 'Sikandarpur', line: 'Yellow', hindi: 'सिकंदरपुर' },
  { id: 'Y35', name: 'MG Road', line: 'Yellow', hindi: 'एमजी रोड' },
  { id: 'Y36', name: 'IFFCO Chowk', line: 'Yellow', hindi: 'इफ्को चौक' },
  { id: 'Y37', name: 'Huda City Centre', line: 'Yellow', hindi: 'हुडा सिटी सेंटर' },

  // Blue Line
  { id: 'B01', name: 'Dwarka Sector 21', line: 'Blue', hindi: 'द्वारका सेक्टर 21' },
  { id: 'B02', name: 'Dwarka Sector 8', line: 'Blue', hindi: 'द्वारका सेक्टर 8' },
  { id: 'B03', name: 'Dwarka Sector 9', line: 'Blue', hindi: 'द्वारका सेक्टर 9' },
  { id: 'B04', name: 'Dwarka Sector 10', line: 'Blue', hindi: 'द्वारका सेक्टर 10' },
  { id: 'B05', name: 'Dwarka Sector 11', line: 'Blue', hindi: 'द्वारका सेक्टर 11' },
  { id: 'B06', name: 'Dwarka Sector 12', line: 'Blue', hindi: 'द्वारका सेक्टर 12' },
  { id: 'B07', name: 'Dwarka Sector 13', line: 'Blue', hindi: 'द्वारका सेक्टर 13' },
  { id: 'B08', name: 'Dwarka Sector 14', line: 'Blue', hindi: 'द्वारका सेक्टर 14' },
  { id: 'B09', name: 'Dwarka', line: 'Blue', hindi: 'द्वारका' },
  { id: 'B10', name: 'Dwarka Mor', line: 'Blue', hindi: 'द्वारका मोड़' },
  { id: 'B11', name: 'Nawada', line: 'Blue', hindi: 'नवादा' },
  { id: 'B12', name: 'Uttam Nagar West', line: 'Blue', hindi: 'उत्तम नगर वेस्ट' },
  { id: 'B13', name: 'Uttam Nagar East', line: 'Blue', hindi: 'उत्तम नगर ईस्ट' },
  { id: 'B14', name: 'Janakpuri West', line: 'Blue', hindi: 'जनकपुरी वेस्ट' },
  { id: 'B15', name: 'Janakpuri East', line: 'Blue', hindi: 'जनकपुरी ईस्ट' },
  { id: 'B16', name: 'Tilak Nagar', line: 'Blue', hindi: 'तिलक नगर' },
  { id: 'B17', name: 'Subhash Nagar', line: 'Blue', hindi: 'सुभाष नगर' },
  { id: 'B18', name: 'Tagore Garden', line: 'Blue', hindi: 'टैगोर गार्डन' },
  { id: 'B19', name: 'Rajouri Garden', line: 'Blue', hindi: 'राजौरी गार्डन' },
  { id: 'B20', name: 'Ramesh Nagar', line: 'Blue', hindi: 'रमेश नगर' },
  { id: 'B21', name: 'Moti Nagar', line: 'Blue', hindi: 'मोती नगर' },
  { id: 'B22', name: 'Kirti Nagar', line: 'Blue', hindi: 'कीर्ति नगर' },
  { id: 'B23', name: 'Shadipur', line: 'Blue', hindi: 'शादीपुर' },
  { id: 'B24', name: 'Patel Nagar', line: 'Blue', hindi: 'पटेल नगर' },
  { id: 'B25', name: 'Rajendra Place', line: 'Blue', hindi: 'राजेंद्र प्लेस' },
  { id: 'B26', name: 'Karol Bagh', line: 'Blue', hindi: 'करोल बाग' },
  { id: 'B27', name: 'Jhandewalan', line: 'Blue', hindi: 'झंडेवालान' },
  { id: 'B28', name: 'RK Ashram Marg', line: 'Blue', hindi: 'आरके आश्रम मार्ग' },
  { id: 'B29', name: 'Rajiv Chowk', line: 'Blue', hindi: 'राजीव चौक' },
  { id: 'B30', name: 'Barakhamba Road', line: 'Blue', hindi: 'बाराखंभा रोड' },
  { id: 'B31', name: 'Mandi House', line: 'Blue', hindi: 'मंडी हाउस' },
  { id: 'B32', name: 'Supreme Court', line: 'Blue', hindi: 'सुप्रीम कोर्ट' },
  { id: 'B33', name: 'Indraprastha', line: 'Blue', hindi: 'इंद्रप्रस्थ' },
  { id: 'B34', name: 'Yamuna Bank', line: 'Blue', hindi: 'यमुना बैंक' },
  { id: 'B35', name: 'Akshardham', line: 'Blue', hindi: 'अक्षरधाम' },
  { id: 'B36', name: 'Mayur Vihar Phase-1', line: 'Blue', hindi: 'मयूर विहार फेज-1' },
  { id: 'B37', name: 'Mayur Vihar Extension', line: 'Blue', hindi: 'मयूर विहार एक्सटेंशन' },
  { id: 'B38', name: 'New Ashok Nagar', line: 'Blue', hindi: 'न्यू आशोक नगर' },
  { id: 'B39', name: 'Noida Sector 15', line: 'Blue', hindi: 'नोएडा सेक्टर 15' },
  { id: 'B40', name: 'Noida Sector 16', line: 'Blue', hindi: 'नोएडा सेक्टर 16' },
  { id: 'B41', name: 'Noida Sector 18', line: 'Blue', hindi: 'नोएडा सेक्टर 18' },
  { id: 'B42', name: 'Botanical Garden', line: 'Blue', hindi: 'बॉटनिकल गार्डन' },
  { id: 'B43', name: 'Golf Course', line: 'Blue', hindi: 'गोल्फ कोर्स' },
  { id: 'B44', name: 'Noida City Centre', line: 'Blue', hindi: 'नोएडा सिटी सेंटर' },
  { id: 'B45', name: 'Noida Sector 34', line: 'Blue', hindi: 'नोएडा सेक्टर 34' },
  { id: 'B46', name: 'Noida Sector 52', line: 'Blue', hindi: 'नोएडा सेक्टर 52' },
  { id: 'B47', name: 'Noida Sector 61', line: 'Blue', hindi: 'नोएडा सेक्टर 61' },
  { id: 'B48', name: 'Noida Sector 59', line: 'Blue', hindi: 'नोएडा सेक्टर 59' },
  { id: 'B49', name: 'Noida Sector 62', line: 'Blue', hindi: 'नोएडा सेक्टर 62' },
  { id: 'B50', name: 'Noida Electronic City', line: 'Blue', hindi: 'नोएडा इलेक्ट्रॉनिक सिटी' },

  // Green Line
  { id: 'G01', name: 'Inderlok', line: 'Green', hindi: 'इंदरलोक' },
  { id: 'G02', name: 'Ashok Park Main', line: 'Green', hindi: 'अशोक पार्क मेन' },
  { id: 'G03', name: 'Punjabi Bagh', line: 'Green', hindi: 'पंजाबी बाग' },
  { id: 'G04', name: 'Shivaji Park', line: 'Green', hindi: 'शिवाजी पार्क' },
  { id: 'G05', name: 'Madipur', line: 'Green', hindi: 'मादीपुर' },
  { id: 'G06', name: 'Paschim Vihar East', line: 'Green', hindi: 'पश्चिम विहार ईस्ट' },
  { id: 'G07', name: 'Paschim Vihar West', line: 'Green', hindi: 'पश्चिम विहार वेस्ट' },
  { id: 'G08', name: 'Peera Garhi', line: 'Green', hindi: 'पीरागढ़ी' },
  { id: 'G09', name: 'Udyog Nagar', line: 'Green', hindi: 'उद्योग नगर' },
  { id: 'G10', name: 'Surajmal Stadium', line: 'Green', hindi: 'सूरजमल स्टेडियम' },
  { id: 'G11', name: 'Nangloi', line: 'Green', hindi: 'नांगलोई' },
  { id: 'G12', name: 'Nangloi Railway Station', line: 'Green', hindi: 'नांगलोई रेलवे स्टेशन' },
  { id: 'G13', name: 'Rajdhani Park', line: 'Green', hindi: 'राजधानी पार्क' },
  { id: 'G14', name: 'Mundka', line: 'Green', hindi: 'मुंडका' },
  { id: 'G15', name: 'Mundka Industrial Area', line: 'Green', hindi: 'मुंडका इंडस्ट्रियल एरिया' },
  { id: 'G16', name: 'Ghevra', line: 'Green', hindi: 'घेवरा' },
  { id: 'G17', name: 'Tikri Kalan', line: 'Green', hindi: 'टीकरी कालां' },
  { id: 'G18', name: 'Tikri Border', line: 'Green', hindi: 'टीकरी बॉर्डर' },
  { id: 'G19', name: 'Pandit Shree Ram Sharma', line: 'Green', hindi: 'पंडित श्री राम शर्मा' },
  { id: 'G20', name: 'Bahadurgarh City', line: 'Green', hindi: 'बहादुरगढ़ सिटी' },
  { id: 'G21', name: 'Brigadier Hoshiar Singh', line: 'Green', hindi: 'ब्रिगेडियर होशियार सिंह' },

  // Violet Line
  { id: 'V01', name: 'Kashmere Gate', line: 'Violet', hindi: 'कश्मीरी गेट' },
  { id: 'V02', name: 'Lal Qila', line: 'Violet', hindi: 'लाल किला' },
  { id: 'V03', name: 'Jama Masjid', line: 'Violet', hindi: 'जामा मस्जिद' },
  { id: 'V04', name: 'Delhi Gate', line: 'Violet', hindi: 'दिल्ली गेट' },
  { id: 'V05', name: 'ITO', line: 'Violet', hindi: 'आईटीओ' },
  { id: 'V06', name: 'Mandi House', line: 'Violet', hindi: 'मंडी हाउस' },
  { id: 'V07', name: 'Janpath', line: 'Violet', hindi: 'जनपथ' },
  { id: 'V08', name: 'Central Secretariat', line: 'Violet', hindi: 'केंद्रीय सचिवालय' },
  { id: 'V09', name: 'Khan Market', line: 'Violet', hindi: 'खान मार्केट' },
  { id: 'V10', name: 'JLN Stadium', line: 'Violet', hindi: 'जेएलएन स्टेडियम' },
  { id: 'V11', name: 'Jangpura', line: 'Violet', hindi: 'जंगपुरा' },
  { id: 'V12', name: 'Lajpat Nagar', line: 'Violet', hindi: 'लाजपत नगर' },
  { id: 'V13', name: 'Moolchand', line: 'Violet', hindi: 'मूलचंद' },
  { id: 'V14', name: 'Kailash Colony', line: 'Violet', hindi: 'कैलाश कॉलोनी' },
  { id: 'V15', name: 'Nehru Place', line: 'Violet', hindi: 'नेहरू प्लेस' },
  { id: 'V16', name: 'Kalkaji Mandir', line: 'Violet', hindi: 'कालकाजी मंदिर' },
  { id: 'V17', name: 'Govind Puri', line: 'Violet', hindi: 'गोविंद पुरी' },
  { id: 'V18', name: 'Harkesh Nagar Okhla', line: 'Violet', hindi: 'हरकेश नगर ओखला' },
  { id: 'V19', name: 'Jasola Apollo', line: 'Violet', hindi: 'जसोला अपोलो' },
  { id: 'V20', name: 'Sarita Vihar', line: 'Violet', hindi: 'सरिता विहार' },
  { id: 'V21', name: 'Mohan Estate', line: 'Violet', hindi: 'मोहन एस्टेट' },
  { id: 'V22', name: 'Tughlakabad', line: 'Violet', hindi: 'तुगलकाबाद' },
  { id: 'V23', name: 'Badarpur', line: 'Violet', hindi: 'बदरपुर' },
  { id: 'V24', name: 'Sarai', line: 'Violet', hindi: 'सराई' },
  { id: 'V25', name: 'NHPC Chowk', line: 'Violet', hindi: 'एनएचपीसी चौक' },
  { id: 'V26', name: 'Mewala Maharajpur', line: 'Violet', hindi: 'मेवाला महाराजपुर' },
  { id: 'V27', name: 'Sector 28', line: 'Violet', hindi: 'सेक्टर 28' },
  { id: 'V28', name: 'Badkhal Mor', line: 'Violet', hindi: 'बड़खल मोर' },
  { id: 'V29', name: 'Faridabad Old', line: 'Violet', hindi: 'फरीदाबाद ओल्ड' },
  { id: 'V30', name: 'Neelam Chowk Ajronda', line: 'Violet', hindi: 'नीलम चौक अजरोंदा' },
  { id: 'V31', name: 'Bata Chowk', line: 'Violet', hindi: 'बाटा चौक' },
  { id: 'V32', name: 'Escorts Mujesar', line: 'Violet', hindi: 'एस्कॉर्ट्स मुजेसर' },
  { id: 'V33', name: 'Sant Surdas - Sihi', line: 'Violet', hindi: 'संत सूरदास - सीही' },
  { id: 'V34', name: 'Raja Nahar Singh', line: 'Violet', hindi: 'राजा नाहर सिंह' },

  // Pink Line
  { id: 'P01', name: 'Majlis Park', line: 'Pink', hindi: 'मजलिस पार्क' },
  { id: 'P02', name: 'Azadpur', line: 'Pink', hindi: 'आजादपुर' },
  { id: 'P03', name: 'Shalimar Bagh', line: 'Pink', hindi: 'शालीमार बाग' },
  { id: 'P04', name: 'Netaji Subhash Place', line: 'Pink', hindi: 'नेताजी सुभाष प्लेस' },
  { id: 'P05', name: 'Shakurpur', line: 'Pink', hindi: 'शकुरपुर' },
  { id: 'P06', name: 'Punjabi Bagh West', line: 'Pink', hindi: 'पंजाबी बाग वेस्ट' },
  { id: 'P07', name: 'ESI - Basaidarapur', line: 'Pink', hindi: 'ईएसआई - बसाईदारापुर' },
  { id: 'P08', name: 'Rajouri Garden', line: 'Pink', hindi: 'राजौरी गार्डन' },
  { id: 'P09', name: 'Mayapuri', line: 'Pink', hindi: 'मायापुरी' },
  { id: 'P10', name: 'Naraina Vihar', line: 'Pink', hindi: 'नरैना विहार' },
  { id: 'P11', name: 'Delhi Cantonment', line: 'Pink', hindi: 'दिल्ली कैंटोनमेंट' },
  { id: 'P12', name: 'Dhaula Kuan', line: 'Pink', hindi: 'धौला कुआं' },
  { id: 'P13', name: 'Durgabai Deshmukh South Campus', line: 'Pink', hindi: 'दुर्गाबाई देशमुख साउथ कैंपस' },
  { id: 'P14', name: 'Sir M. Vishweshwaraiah Moti Bagh', line: 'Pink', hindi: 'सर एम. विश्वेश्वरैया मोती बाग' },
  { id: 'P15', name: 'Bhikaji Cama Place', line: 'Pink', hindi: 'भीकाजी कामा प्लेस' },
  { id: 'P16', name: 'Sarojini Nagar', line: 'Pink', hindi: 'सरोजिनी नगर' },
  { id: 'P17', name: 'Dilli Haat - INA', line: 'Pink', hindi: 'दिल्ली हाट - आईएनए' },
  { id: 'P18', name: 'South Extension', line: 'Pink', hindi: 'साउथ एक्सटेंशन' },
  { id: 'P19', name: 'Lajpat Nagar', line: 'Pink', hindi: 'लाजपत नगर' },
  { id: 'P20', name: 'Vinobapuri', line: 'Pink', hindi: 'विनोबापुरी' },
  { id: 'P21', name: 'Ashram', line: 'Pink', hindi: 'आश्रम' },
  { id: 'P22', name: 'Sarai Kale Khan - Hazrat Nizamuddin', line: 'Pink', hindi: 'सराय काले खान - हजरत निजामुद्दीन' },
  { id: 'P23', name: 'Mayur Vihar - I', line: 'Pink', hindi: 'मयूर विहार - I' },
  { id: 'P24', name: 'Mayur Vihar Pocket 1', line: 'Pink', hindi: 'मयूर विहार पॉकेट 1' },
  { id: 'P25', name: 'Trilokpuri - Sanjay Lake', line: 'Pink', hindi: 'त्रिलोकपुरी - संजय लेक' },
  { id: 'P26', name: 'East Vinod Nagar - Mayur Vihar-II', line: 'Pink', hindi: 'ईस्ट विनोद नगर - मयूर विहार-II' },
  { id: 'P27', name: 'Mandawali - West Vinod Nagar', line: 'Pink', hindi: 'मंडावली - वेस्ट विनोद नगर' },
  { id: 'P28', name: 'IP Extension', line: 'Pink', hindi: 'आईपी एक्सटेंशन' },
  { id: 'P29', name: 'Anand Vihar', line: 'Pink', hindi: 'आनंद विहार' },
  { id: 'P30', name: 'Karkarduma', line: 'Pink', hindi: 'करकरडूमा' },
  { id: 'P31', name: 'Karkarduma Court', line: 'Pink', hindi: 'करकरडूमा कोर्ट' },
  { id: 'P32', name: 'Krishna Nagar', line: 'Pink', hindi: 'कृष्णा नगर' },
  { id: 'P33', name: 'East Azad Nagar', line: 'Pink', hindi: 'ईस्ट आजाद नगर' },
  { id: 'P34', name: 'Welcome', line: 'Pink', hindi: 'वेलकम' },
  { id: 'P35', name: 'Jaffrabad', line: 'Pink', hindi: 'जaffrabad' },
  { id: 'P36', name: 'Maujpur - Babarpur', line: 'Pink', hindi: 'मौजपुर - बबरपुर' },
  { id: 'P37', name: 'Gokulpuri', line: 'Pink', hindi: 'गोकुलपुरी' },
  { id: 'P38', name: 'Johri Enclave', line: 'Pink', hindi: 'जोहरी एन्क्लेव' },
  { id: 'P39', name: 'Shiv Vihar', line: 'Pink', hindi: 'शिव विहार' },

  // Magenta Line
  { id: 'M01', name: 'Janakpuri West', line: 'Magenta', hindi: 'जनकपुरी वेस्ट' },
  { id: 'M02', name: 'Dabri Mor', line: 'Magenta', hindi: 'डाबरी मोर' },
  { id: 'M03', name: 'Dashrath Puri', line: 'Magenta', hindi: 'दशरथ पुरी' },
  { id: 'M04', name: 'Palam', line: 'Magenta', hindi: 'पालम' },
  { id: 'M05', name: 'Sadar Bazaar Cantonment', line: 'Magenta', hindi: 'सदर बाजार कैंटोनमेंट' },
  { id: 'M06', name: 'Terminal 1-IGI Airport', line: 'Magenta', hindi: 'टर्मिनल 1-आईजीआई एयरपोर्ट' },
  { id: 'M07', name: 'Shankar Vihar', line: 'Magenta', hindi: 'शंकर विहार' },
  { id: 'M08', name: 'Vasant Vihar', line: 'Magenta', hindi: 'वसंत विहार' },
  { id: 'M09', name: 'Munirka', line: 'Magenta', hindi: 'मुनिरका' },
  { id: 'M10', name: 'R.K. Puram', line: 'Magenta', hindi: 'आर.के. पुरम' },
  { id: 'M11', name: 'IIT', line: 'Magenta', hindi: 'आईआईटी' },
  { id: 'M12', name: 'Hauz Khas', line: 'Magenta', hindi: 'हौज खास' },
  { id: 'M13', name: 'Panchsheel Park', line: 'Magenta', hindi: 'पंचशील पार्क' },
  { id: 'M14', name: 'Chirag Delhi', line: 'Magenta', hindi: 'चिराग दिल्ली' },
  { id: 'M15', name: 'Greater Kailash', line: 'Magenta', hindi: 'ग्रेटर कैलाश' },
  { id: 'M16', name: 'Nehru Enclave', line: 'Magenta', hindi: 'नेहरू एन्क्लेव' },
  { id: 'M17', name: 'Kalkaji Mandir', line: 'Magenta', hindi: 'कालकाजी मंदिर' },
  { id: 'M18', name: 'Okhla NSIC', line: 'Magenta', hindi: 'ओखला एनएसआईसी' },
  { id: 'M19', name: 'Sukhdev Vihar', line: 'Magenta', hindi: 'सुखदेव विहार' },
  { id: 'M20', name: 'Jamia Millia Islamia', line: 'Magenta', hindi: 'जामिया मिलिया इस्लामिया' },
  { id: 'M21', name: 'Okhla Vihar', line: 'Magenta', hindi: 'ओखला विहार' },
  { id: 'M22', name: 'Jasola Vihar Shaheen Bagh', line: 'Magenta', hindi: 'जसोला विहार शाहीन बाग' },
  { id: 'M23', name: 'Kalindi Kunj', line: 'Magenta', hindi: 'कलिंदी कुंज' },
  { id: 'M24', name: 'Okhla Bird Sanctuary', line: 'Magenta', hindi: 'ओखला बर्ड सेंचुरी' },
  { id: 'M25', name: 'Botanical Garden', line: 'Magenta', hindi: 'बॉटनिकल गार्डन' },

  // Grey Line
  { id: 'GY01', name: 'Dwarka', line: 'Grey', hindi: 'द्वारका' },
  { id: 'GY02', name: 'Nangli', line: 'Grey', hindi: 'नांगली' },
  { id: 'GY03', name: 'Najafgarh', line: 'Grey', hindi: 'नजफगढ़' },

  // Airport Express Line
  { id: 'AE01', name: 'New Delhi', line: 'Orange', hindi: 'नई दिल्ली' },
  { id: 'AE02', name: 'Shivaji Stadium', line: 'Orange', hindi: 'शिवाजी स्टेडियम' },
  { id: 'AE03', name: 'Dhaula Kuan', line: 'Orange', hindi: 'धौला कुआं' },
  { id: 'AE04', name: 'Delhi Aerocity', line: 'Orange', hindi: 'दिल्ली एरोसिटी' },
  { id: 'AE05', name: 'IGI Airport T3', line: 'Orange', hindi: 'आईजीआई एयरपोर्ट टी3' },
  { id: 'AE06', name: 'Yashobhoomi Dwarka Sector 25', line: 'Orange', hindi: 'यशोभूमि द्वारका सेक्टर 25' },

  // Aqua Line
  { id: 'AQ01', name: 'Sector 51', line: 'Aqua', hindi: 'सेक्टर 51' },
  { id: 'AQ02', name: 'Sector 50', line: 'Aqua', hindi: 'सेक्टर 50' },
  { id: 'AQ03', name: 'Sector 76', line: 'Aqua', hindi: 'सेक्टर 76' },
  { id: 'AQ04', name: 'Sector 101', line: 'Aqua', hindi: 'सेक्टर 101' },
  { id: 'AQ05', name: 'Sector 81', line: 'Aqua', hindi: 'सेक्टर 81' },
  { id: 'AQ06', name: 'NSEZ', line: 'Aqua', hindi: 'एनएसईजेड' },
  { id: 'AQ07', name: 'Sector 83', line: 'Aqua', hindi: 'सेक्टर 83' },
  { id: 'AQ08', name: 'Sector 137', line: 'Aqua', hindi: 'सेक्टर 137' },
  { id: 'AQ09', name: 'Sector 142', line: 'Aqua', hindi: 'सेक्टर 142' },
  { id: 'AQ10', name: 'Sector 143', line: 'Aqua', hindi: 'सेक्टर 143' },
  { id: 'AQ11', name: 'Sector 144', line: 'Aqua', hindi: 'सेक्टर 144' },
  { id: 'AQ12', name: 'Sector 145', line: 'Aqua', hindi: 'सेक्टर 145' },
  { id: 'AQ13', name: 'Sector 146', line: 'Aqua', hindi: 'सेक्टर 146' },
  { id: 'AQ14', name: 'Sector 147', line: 'Aqua', hindi: 'सेक्टर 147' },
  { id: 'AQ15', name: 'Sector 148', line: 'Aqua', hindi: 'सेक्टर 148' },
  { id: 'AQ16', name: 'Knowledge Park II', line: 'Aqua', hindi: 'नॉलेज पार्क II' },
  { id: 'AQ17', name: 'Pari Chowk', line: 'Aqua', hindi: 'परी चौक' },
  { id: 'AQ18', name: 'Alpha 1', line: 'Aqua', hindi: 'अल्फा 1' },
  { id: 'AQ19', name: 'Delta 1', line: 'Aqua', hindi: 'डेल्टा 1' },
  { id: 'AQ20', name: 'GNIDA Office', line: 'Aqua', hindi: 'जीएनआईडीए ऑफिस' },
  { id: 'AQ21', name: 'Depot Station', line: 'Aqua', hindi: 'डिपो स्टेशन' }
]

export const fetchStations = createAsyncThunk(
  'metro/fetchStations',
  async () => {
    // In real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(allStations)
      }, 500)
    })
  }
)



const metroSlice = createSlice({
  name: 'metro',
  initialState: {
    stations: [],
    selectedRoute: null,
    fare: null,
    loading: false,
    error: null,
    fromStation: '',
    toStation: '',
  },
  reducers: {
    setFromStation: (state, action) => {
      state.fromStation = action.payload
    },
    setToStation: (state, action) => {
      state.toStation = action.payload
    },
    clearRoute: (state) => {
      state.selectedRoute = null
      state.fare = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Stations
      .addCase(fetchStations.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchStations.fulfilled, (state, action) => {
        state.loading = false
        state.stations = action.payload
      })
      .addCase(fetchStations.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
   
  },
})

export const { setFromStation, setToStation, clearRoute, clearError } = metroSlice.actions
export default metroSlice.reducer


