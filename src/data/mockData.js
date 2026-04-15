// ============================================================
// SAARTHI MOCK DATA — Mr. Ramesh Sharma, 72 yrs, Delhi NCR
// ============================================================

export const guardian = {
  name: "Rohan Sharma",
  relation: "Son",
  location: "Bengaluru, Karnataka",
  avatar: null,
};

export const elder = {
  name: "Mr. Ramesh Sharma",
  age: 72,
  location: "C-14, Sector 18, Noida, UP",
  conditions: ["Hypertension (Stage 1)", "Type 2 Diabetes", "Mild Osteoarthritis"],
  allergies: ["Penicillin", "Sulfa Drugs"],
  bloodGroup: "B+",
};

export const liveShift = {
  status: "live",
  companionName: "Anjali Mehta",
  shiftStart: "10:00 AM",
  shiftEnd: "10:00 PM",
  startedAgo: "2 hrs 14 min ago",
  checkInTime: "10:03 AM",
};

export const companion = {
  name: "Anjali Mehta",
  id: "SAR-2041",
  role: "Senior Companion",
  experience: "4 years",
  languages: ["Hindi", "English", "Punjabi"],
  bio: "Anjali is a trained companion with a background in geriatric care assistance. She is warm, patient, and experienced in supporting elders with chronic conditions. She enjoys cooking chai with Uncle and discussing cricket.",
  rating: 4.9,
  shiftsCompleted: 187,
  phone: "+91 98110 44321",
  avatar: "AJ",
};

export const acm = {
  name: "Dr. Priya Nair",
  role: "Area Care Manager",
  qualification: "M.Sc. Gerontology, RN",
  zone: "Noida & Greater Noida",
  phone: "+91 98765 00111",
  email: "priya.nair@saarthi.care",
  officeHours: "Mon–Sat, 9AM–7PM",
  avatar: "PN",
  respondsIn: "< 15 minutes",
};

export const vitals = [
  {
    id: "bp",
    label: "Blood Pressure",
    value: "132 / 84",
    unit: "mmHg",
    status: "yellow",
    statusLabel: "Slightly Elevated",
    icon: "Activity",
    lastChecked: "10:45 AM",
    normal: "< 130/80",
  },
  {
    id: "sugar",
    label: "Blood Sugar (PP)",
    value: "148",
    unit: "mg/dL",
    status: "green",
    statusLabel: "Normal",
    icon: "Droplets",
    lastChecked: "11:10 AM",
    normal: "< 180 mg/dL (PP)",
  },
  {
    id: "hr",
    label: "Heart Rate",
    value: "74",
    unit: "bpm",
    status: "green",
    statusLabel: "Normal",
    icon: "Heart",
    lastChecked: "10:45 AM",
    normal: "60–100 bpm",
  },
  {
    id: "spo2",
    label: "SpO₂",
    value: "97",
    unit: "%",
    status: "green",
    statusLabel: "Normal",
    icon: "Wind",
    lastChecked: "10:45 AM",
    normal: "> 95%",
  },
];

export const timelineEntries = [
  {
    id: 1,
    time: "10:03 AM",
    category: "daily",
    icon: "Home",
    title: "Companion Arrived",
    description: "Anjali arrived and greeted Uncle. He was awake and in good spirits. Found him watching morning news.",
    flag: false,
  },
  {
    id: 2,
    time: "10:15 AM",
    category: "health",
    icon: "Activity",
    title: "Morning Vitals Checked",
    description: "BP: 132/84 mmHg (slightly elevated, noted). Heart Rate: 74 bpm. SpO₂: 97%. Temperature: 98.2°F.",
    flag: false,
  },
  {
    id: 3,
    time: "10:45 AM",
    category: "medication",
    icon: "Pill",
    title: "Morning Medications Administered",
    description: "Telma 40 (Telmisartan) — 1 tablet. Pan-D (Pantoprazole + Domperidone) — 1 capsule before food. Metformin 500mg — 1 tablet with water. All confirmed taken.",
    flag: false,
  },
  {
    id: 4,
    time: "11:00 AM",
    category: "daily",
    icon: "Coffee",
    title: "Morning Chai & Breakfast",
    description: "Prepared light breakfast — 2 rotis with moong dal and a small cup of adrak chai (low sugar). Uncle ate full portion and was chatty.",
    flag: false,
  },
  {
    id: 5,
    time: "11:30 AM",
    category: "health",
    icon: "Dumbbell",
    title: "Morning Physiotherapy Exercises",
    description: "Completed 15-min seated knee exercises and shoulder rotation as per Dr. Kapoor's physiotherapy plan. Uncle cooperated well. Mild stiffness noted in left knee.",
    flag: false,
  },
  {
    id: 6,
    time: "12:15 PM",
    category: "daily",
    icon: "Sun",
    title: "Balcony Walk & Sunlight",
    description: "15-minute walk on the balcony for Vitamin D and light activity. Uncle watered his tulsi plant and seemed happy.",
    flag: false,
  },
  {
    id: 7,
    time: "1:30 PM",
    category: "daily",
    icon: "UtensilsCrossed",
    title: "Lunch Completed",
    description: "Lunch: Khichdi with ghee, cucumber raita, and one small banana. Uncle ate a full portion. Appetite appears normal today.",
    flag: false,
  },
  {
    id: 8,
    time: "1:45 PM",
    category: "medication",
    icon: "Pill",
    title: "Post-Lunch Medication",
    description: "Metformin 500mg (second dose) — administered after lunch as prescribed. Taken with half a glass of water.",
    flag: false,
  },
  {
    id: 9,
    time: "2:00 PM",
    category: "daily",
    icon: "Moon",
    title: "Afternoon Rest",
    description: "Uncle took his usual afternoon nap. Resting comfortably. Room temperature set to 26°C.",
    flag: false,
  },
  {
    id: 10,
    time: "3:45 PM",
    category: "health",
    icon: "AlertTriangle",
    title: "Observational Flag — Mild Confusion",
    description: "Note from Anjali: Uncle seemed briefly confused while trying to find the TV remote — it was right in front of him on the table. This lasted about 30 seconds and then resolved. He laughed it off. Flagging for family awareness as this is the second instance this week.",
    flag: true,
    flagType: "cognitive",
  },
  {
    id: 11,
    time: "4:00 PM",
    category: "daily",
    icon: "Coffee",
    title: "Evening Snack",
    description: "Light snack served — 4 Marie biscuits with a cup of green tea (unsweetened). Uncle mentioned he wasn't very hungry. Appetite slightly reduced compared to yesterday.",
    flag: true,
    flagType: "appetite",
  },
  {
    id: 12,
    time: "4:30 PM",
    category: "health",
    icon: "Heart",
    title: "Afternoon Vitals & BP Check",
    description: "BP: 128/82 mmHg (improved from morning). HR: 72 bpm. SpO₂: 98%. Uncle reporting no pain or discomfort.",
    flag: false,
  },
  {
    id: 13,
    time: "5:15 PM",
    category: "daily",
    icon: "Phone",
    title: "Video Call with Son (Rohan)",
    description: "Uncle had a 20-minute video call with Rohan. He was happy and engaged. Told him about his morning walk and physiotherapy. No unusual behavior noted during call.",
    flag: false,
  },
  {
    id: 14,
    time: "6:00 PM",
    category: "daily",
    icon: "Tv",
    title: "Evening Leisure — DD News & Cricket",
    description: "Uncle watching India vs. Australia match highlights on Star Sports. Very excited about a Rohit Sharma century. Good mood.",
    flag: false,
  },
];

export const bpTrendData = [
  { day: "Mon",  systolic: 138, diastolic: 88 },
  { day: "Tue",  systolic: 134, diastolic: 86 },
  { day: "Wed",  systolic: 140, diastolic: 90 },
  { day: "Thu",  systolic: 136, diastolic: 87 },
  { day: "Fri",  systolic: 130, diastolic: 83 },
  { day: "Sat",  systolic: 128, diastolic: 82 },
  { day: "Sun",  systolic: 132, diastolic: 84 },
];

export const adherenceData = [
  { day: "Mon", adherence: 100 },
  { day: "Tue", adherence: 100 },
  { day: "Wed", adherence: 67  },
  { day: "Thu", adherence: 100 },
  { day: "Fri", adherence: 100 },
  { day: "Sat", adherence: 100 },
  { day: "Sun", adherence: 100 },
];

export const aiWeeklySummary = {
  overallStatus: "Stable",
  summary: `Overall, Dad had a stable and reasonably active week. Blood pressure showed a slight mid-week spike on Wednesday (140/90 mmHg) but has since trended back toward his normal range, ending the week at 132/84. This is consistent with his Stage 1 hypertension pattern.\n\nWe noticed a slight decrease in appetite during evening snacks on Tuesday and Wednesday — Anjali reports he mentioned feeling "not very hungry" on both days. His morning appetite remained normal throughout. This is being monitored closely.\n\nOn the cognitive front, two brief instances of mild confusion were flagged this week (Monday and today, Wednesday). Both resolved quickly and lasted under a minute. We recommend discussing this pattern with his neurologist at the next scheduled consultation.\n\nPhysiotherapy adherence was excellent — all 6 scheduled sessions were completed. Medication adherence was 95% (one missed evening Metformin dose on Wednesday).`,
  highlights: [
    { type: "positive", text: "Physiotherapy completed all 6/6 sessions" },
    { type: "positive", text: "Blood sugar remained within target range all week" },
    { type: "positive", text: "Mood was consistently positive and social" },
    { type: "warning", text: "Mid-week BP spike on Wednesday — monitor closely" },
    { type: "warning", text: "Slight appetite decrease noted on 2 evenings" },
    { type: "warning", text: "Two brief cognitive confusion episodes flagged" },
  ],
};

export const riskIndicators = [
  {
    id: 1,
    severity: "medium",
    title: "Episodic Mild Confusion",
    description: "2 instances in 7 days of brief disorientation (< 1 min each). Pattern emerging. Recommend neurologist consult.",
    detectedOn: "Last 7 days",
    icon: "Brain",
  },
  {
    id: 2,
    severity: "low",
    title: "Decreased Evening Appetite",
    description: "Reduced food intake at evening snack on 3 of the last 10 days. Blood sugar levels remain stable.",
    detectedOn: "Last 10 days",
    icon: "UtensilsCrossed",
  },
  {
    id: 3,
    severity: "low",
    title: "Morning BP Variability",
    description: "Systolic BP has shown ±12 mmHg variability between readings this week. Medication timing may need review.",
    detectedOn: "Last 7 days",
    icon: "TrendingUp",
  },
];

export const carePlan = {
  dailyTasks: [
    { id: 1, time: "6:30 AM",  task: "Fasting Blood Sugar Check", done: true,  category: "health" },
    { id: 2, time: "7:00 AM",  task: "Morning Walk (15 min minimum)", done: true,  category: "daily" },
    { id: 3, time: "8:00 AM",  task: "Breakfast — Low GI, High Protein", done: true,  category: "daily" },
    { id: 4, time: "8:30 AM",  task: "Medications: Telma 40 + Pan-D + Metformin", done: true,  category: "medication" },
    { id: 5, time: "10:00 AM", task: "Companion Arrives / Shift Handover Check", done: true,  category: "daily" },
    { id: 6, time: "10:15 AM", task: "Full Vitals Reading (BP, HR, SpO₂, Temp)", done: true,  category: "health" },
    { id: 7, time: "11:00 AM", task: "Physiotherapy Exercises (Dr. Kapoor's Plan)", done: true,  category: "health" },
    { id: 8, time: "1:30 PM",  task: "Lunch — Balanced Diabetic-Friendly Meal", done: true,  category: "daily" },
    { id: 9, time: "2:00 PM",  task: "Post-Lunch Metformin 500mg", done: true,  category: "medication" },
    { id: 10, time: "4:30 PM", task: "Afternoon Vitals Check", done: true,  category: "health" },
    { id: 11, time: "5:00 PM", task: "Weekly Grocery Pickup (Tuesdays)", done: false, category: "daily" },
    { id: 12, time: "7:30 PM", task: "Evening Medications (Amlodipine 5mg)", done: false, category: "medication" },
    { id: 13, time: "8:00 PM", task: "Dinner — Light Meal", done: false, category: "daily" },
    { id: 14, time: "9:30 PM", task: "Night Vitals & End-of-Day Report", done: false, category: "health" },
  ],
  emergencyProtocols: {
    preferredHospital: {
      name: "Fortis Hospital, Sector 62",
      address: "B-22, Sector 62, Noida, UP",
      phone: "0120-462-2222",
      distance: "3.2 km from home",
    },
    ambulanceServices: [
      { name: "108 Ambulance (UP)", number: "108", type: "Government" },
      { name: "Medulance", number: "+91 78181 81818", type: "Private" },
    ],
    neighborContacts: [
      { name: "Mrs. Sunita Agarwal (Next Door, C-15)", phone: "+91 99999 11234", relation: "Neighbor" },
      { name: "Mr. Deepak Verma (Building Secretary)", phone: "+91 98112 55678", relation: "Society" },
    ],
    familyContacts: [
      { name: "Rohan Sharma (Son, Bengaluru)", phone: "+91 98765 43210" },
      { name: "Priya Sharma (Daughter-in-law)", phone: "+91 87654 32109" },
    ],
  },
  prescriptions: [
    { drug: "Telma 40 (Telmisartan 40mg)", frequency: "Once daily, morning", prescribedBy: "Dr. Anil Mehta (Cardiologist)" },
    { drug: "Pan-D (Pantoprazole 40mg + Domperidone 10mg)", frequency: "Once daily, before breakfast", prescribedBy: "Dr. Anil Mehta" },
    { drug: "Metformin 500mg", frequency: "Twice daily, post meals", prescribedBy: "Dr. Sunitha Rao (Endocrinologist)" },
    { drug: "Amlodipine 5mg", frequency: "Once daily, evening", prescribedBy: "Dr. Anil Mehta (Cardiologist)" },
    { drug: "Shelcal 500 (Calcium + Vit D3)", frequency: "Once daily, post lunch", prescribedBy: "Dr. Ritu Kapoor (Orthopedic)" },
  ],
};
