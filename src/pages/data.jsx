// Add this at the top of your Home component, after the imports
export const metroLinesData = [
  { 
    name: 'Red Line', 
    color: 'bg-gradient-to-br from-red-500 to-red-600',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-red-600'
  },
  { 
    name: 'Yellow Line', 
    color: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-yellow-600'
  },
  { 
    name: 'Blue Line', 
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600'
  },
  { 
    name: 'Green Line', 
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-green-600'
  },
  { 
    name: 'Violet Line', 
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-600'
  },
  { 
    name: 'Pink Line', 
    color: 'bg-gradient-to-br from-pink-400 to-pink-500',
    gradientFrom: 'from-pink-400',
    gradientTo: 'to-pink-500'
  },
  { 
    name: 'Magenta Line', 
    color: 'bg-gradient-to-br from-fuchsia-500 to-pink-500',
    gradientFrom: 'from-fuchsia-500',
    gradientTo: 'to-pink-500'
  },
  { 
    name: 'Orange Line', 
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-orange-600'
  },
  { 
    name: 'Grey Line', 
    color: 'bg-gradient-to-br from-gray-500 to-gray-600',
    gradientFrom: 'from-gray-500',
    gradientTo: 'to-gray-600'
  },
  { 
    name: 'Aqua Line', 
    color: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-500'
  }
];

// Calculate total stations
export const metroStations = {
  'Red Line': ['Shaheed Sthal', 'Hindon River', 'Arthala', 'Mohan Nagar', 'Shyam Park', 'Major Mohit Sharma', 'Raj Bagh', 'Shaheed Nagar', 'Dilshad Garden', 'Jhilmil', 'Mansarovar Park', 'Shahdara', 'Welcome', 'Seelampur', 'Shastri Park', 'Kashmere Gate', 'Tis Hazari', 'Pul Bangash', 'Pratap Nagar', 'Shastri Nagar', 'Inderlok', 'Kanhiya Nagar', 'Keshav Puram', 'Netaji Subhash Place', 'Kohat Enclave', 'Pitam Pura', 'Rohini East', 'Rohini West', 'Rithala'],
  'Yellow Line': ['Samaypur Badli', 'Rohini Sector 18,19', 'Haiderpur Badli Mor', 'Jahangirpuri', 'Adarsh Nagar', 'Azadpur', 'Model Town', 'GTB Nagar', 'Vishwa Vidyalaya', 'Vidhan Sabha', 'Civil Lines', 'Kashmere Gate', 'Chandni Chowk', 'Chawri Bazar', 'New Delhi', 'Rajiv Chowk', 'Patel Chowk', 'Central Secretariat', 'Udyog Bhawan', 'Lok Kalyan Marg', 'Jor Bagh', 'INA', 'AIIMS', 'Green Park', 'Hauz Khas', 'Malviya Nagar', 'Saket', 'Qutab Minar', 'Chhatarpur', 'Sultanpur', 'Ghitorni', 'Arjan Garh', 'Guru Dronacharya', 'Sikandarpur', 'MG Road', 'IFFCO Chowk', 'Huda City Centre'],
  'Blue Line': ['Dwarka Sector 21', 'Dwarka Sector 8', 'Dwarka Sector 9', 'Dwarka Sector 10', 'Dwarka Sector 11', 'Dwarka Sector 12', 'Dwarka Sector 13', 'Dwarka Sector 14', 'Dwarka', 'Dwarka Mor', 'Nawada', 'Uttam Nagar West', 'Uttam Nagar East', 'Janakpuri West', 'Janakpuri East', 'Tilak Nagar', 'Subhash Nagar', 'Tagore Garden', 'Rajouri Garden', 'Ramesh Nagar', 'Moti Nagar', 'Kirti Nagar', 'Shadipur', 'Patel Nagar', 'Rajendra Place', 'Karol Bagh', 'Jhandewalan', 'RK Ashram Marg', 'Rajiv Chowk', 'Barakhamba Road', 'Mandi House', 'Supreme Court', 'Indraprastha', 'Yamuna Bank', 'Akshardham', 'Mayur Vihar Phase-1', 'Mayur Vihar Extension', 'New Ashok Nagar', 'Noida Sector 15', 'Noida Sector 16', 'Noida Sector 18', 'Botanical Garden', 'Golf Course', 'Noida City Centre', 'Noida Sector 34', 'Noida Sector 52', 'Noida Sector 61', 'Noida Sector 59', 'Noida Sector 62', 'Noida Electronic City'],
  'Green Line': ['Inderlok', 'Ashok Park Main', 'Punjabi Bagh', 'Shivaji Park', 'Madipur', 'Paschim Vihar East', 'Paschim Vihar West', 'Peera Garhi', 'Udyog Nagar', 'Surajmal Stadium', 'Nangloi', 'Nangloi Railway Station', 'Rajdhani Park', 'Mundka', 'Mundka Industrial Area', 'Ghevra', 'Tikri Kalan', 'Tikri Border', 'Pandit Shree Ram Sharma', 'Bahadurgarh City', 'Brigadier Hoshiar Singh'],
  'Violet Line': ['Kashmere Gate', 'Lal Qila', 'Jama Masjid', 'Delhi Gate', 'ITO', 'Mandi House', 'Janpath', 'Central Secretariat', 'Khan Market', 'JLN Stadium', 'Jangpura', 'Lajpat Nagar', 'Moolchand', 'Kailash Colony', 'Nehru Place', 'Kalkaji Mandir', 'Govind Puri', 'Harkesh Nagar Okhla', 'Jasola Apollo', 'Sarita Vihar', 'Mohan Estate', 'Tughlakabad', 'Badarpur', 'Sarai', 'NHPC Chowk', 'Mewala Maharajpur', 'Sector 28', 'Badkhal Mor', 'Faridabad Old', 'Neelam Chowk Ajronda', 'Bata Chowk', 'Escorts Mujesar', 'Sant Surdas - Sihi', 'Raja Nahar Singh'],
  'Pink Line': ['Majlis Park', 'Azadpur', 'Shalimar Bagh', 'Netaji Subhash Place', 'Shakurpur', 'Punjabi Bagh West', 'ESI - Basaidarapur', 'Rajouri Garden', 'Mayapuri', 'Naraina Vihar', 'Delhi Cantonment', 'Dhaula Kuan', 'Durgabai Deshmukh South Campus', 'Sir M. Vishweshwaraiah Moti Bagh', 'Bhikaji Cama Place', 'Sarojini Nagar', 'Dilli Haat - INA', 'South Extension', 'Lajpat Nagar', 'Vinobapuri', 'Ashram', 'Sarai Kale Khan - Hazrat Nizamuddin', 'Mayur Vihar - I', 'Mayur Vihar Pocket 1', 'Trilokpuri - Sanjay Lake', 'East Vinod Nagar - Mayur Vihar-II', 'Mandawali - West Vinod Nagar', 'IP Extension', 'Anand Vihar', 'Karkarduma', 'Karkarduma Court', 'Krishna Nagar', 'East Azad Nagar', 'Welcome', 'Jaffrabad', 'Maujpur - Babarpur', 'Gokulpuri', 'Johri Enclave', 'Shiv Vihar'],
  'Magenta Line': ['Janakpuri West', 'Dabri Mor', 'Dashrath Puri', 'Palam', 'Sadar Bazaar Cantonment', 'Terminal 1-IGI Airport', 'Shankar Vihar', 'Vasant Vihar', 'Munirka', 'R.K. Puram', 'IIT Delhi', 'Hauz Khas', 'Panchsheel Park', 'Chirag Delhi', 'Greater Kailash', 'Nehru Enclave', 'Kalkaji Mandir', 'Okhla NSIC', 'Sukhdev Vihar', 'Jamia Millia Islamia', 'Okhla Vihar', 'Jasola Vihar Shaheen Bagh', 'Kalindi Kunj', 'Okhla Bird Sanctuary', 'Botanical Garden'],
  'Orange Line': ['New Delhi Railway Station', 'Shivaji Stadium', 'Dhaula Kuan', 'Delhi Aerocity', 'IGI Airport Terminal 3', 'Dwarka Sector 21'],
  'Grey Line': ['Dwarka', 'Nangli', 'Najafgarh', 'Dhansa Bus Stand'],
  'Aqua Line': ['Noida Sector 51', 'Noida Sector 50', 'Noida Sector 76', 'Noida Sector 101', 'Noida Sector 81', 'NSEZ', 'Noida Sector 83', 'Noida Sector 137', 'Noida Sector 142', 'Noida Sector 143', 'Noida Sector 144', 'Noida Sector 145', 'Noida Sector 146', 'Noida Sector 147', 'Noida Sector 148', 'Knowledge Park II', 'Pari Chowk', 'Alpha 1', 'Delta 1', 'GNIDA Office', 'Depot']
};

// Calculate total stations
