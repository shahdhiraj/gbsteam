export interface Project {
  id: string;
  title: string;
  technologies: string;
  image: string;
  description: string;
  longDescription?: string;
  features?: string[];
  status?: 'Completed' | 'In Progress' | 'Research phase';
  challenges?: string;
  solution?: string;
}

export const projects: Project[] = [
  {
    id: 'military-robot',
    title: 'MILITARY ROBOT',
    technologies: 'AI, UGV, IoT',
    image: '/project_tracked_robot.jpg',
    description: 'An advanced unmanned ground vehicle designed for reconnaissance and hazardous military operations.',
    longDescription: 'The Military Robot (MR-X1) is a state-of-the-art Unmanned Ground Vehicle (UGV) developed to assist military personnel in high-risk environments. It is equipped with advanced sensor fusion, autonomous navigation capabilities, and real-time data transmission systems to ensure maximum situational awareness for remote operators.',
    status: 'Completed',
    features: ['All-terrain continuous track system', 'Thermal and night vision cameras', 'Secure encrypted communication link', 'Remote weapons station compatibility', 'Modular payload bay'],
    challenges: 'Developing a ruggedized chassis capable of withstanding extreme environmental conditions while maintaining low acoustic signatures.',
    solution: 'Utilized advanced composite materials for the chassis and implemented a custom hybrid-electric drivetrain for silent operation.'
  },
  {
    id: 'surveillance-drone',
    title: 'SURVEILLANCE DRONE',
    technologies: 'UAV, AI, GPS',
    image: '/project_hexacopter.jpg',
    description: 'A high-altitude surveillance hexacopter equipped with AI-powered target tracking and GPS navigation.',
    longDescription: 'Our tactical Surveillance Drone is engineered for extended flight times and high-payload capacity. It integrates deep learning algorithms for real-time object detection and tracking, making it ideal for border patrol, search and rescue, and large-scale area monitoring.',
    status: 'In Progress',
    features: ['AI-powered object tracking (vehicles, personnel)', 'High-resolution optical zoom and thermal imaging', 'Autonomous waypoint navigation', 'Swarm capabilities with multiple drones', 'Wind resistance up to 50 km/h'],
    challenges: 'Achieving stable flight in high-wind conditions while maintaining smooth video transmission from the high-zoom payload.',
    solution: 'Implemented a custom active-gimbal stabilization system and an advanced PID flight controller tuned for heavy payloads.'
  },
  {
    id: 'fire-fighting-robot',
    title: 'FIRE FIGHTING ROBOT',
    technologies: 'UGV, Pump, IoT',
    image: '/fire_robot_1783827963752.png',
    description: 'Autonomous fire fighting robot capable of navigating through extreme temperatures to extinguish fires.',
    longDescription: 'Designed to protect first responders, this Fire Fighting Robot can enter hazardous burning structures where human entry is impossible. It is equipped with high-pressure water cannons, foam dispensers, and a specialized thermal shield that allows it to operate in temperatures exceeding 500°C.',
    status: 'Completed',
    features: ['Heat-resistant shielding and active cooling', 'High-pressure multidirectional nozzle', 'Gas sensors for explosive environments', 'Live thermal feed for human operators', 'Obstacle climbing capabilities'],
    challenges: 'Protecting the internal electronics and battery systems from intense radiant and conductive heat.',
    solution: 'Developed an active liquid cooling loop specifically for the battery pack and encased all sensitive electronics in aerogel insulation.'
  },
  {
    id: 'robotic-arm',
    title: 'ROBOTIC ARM',
    technologies: 'Servo, AI, Vision',
    image: '/project_arm_robot.jpg',
    description: 'A precise multi-axis robotic arm with computer vision integration for automated assembly tasks.',
    longDescription: 'This highly versatile 6-axis robotic arm is built for high-precision manufacturing and automated quality control. It leverages computer vision to identify parts, calculate optimal grasp points, and perform complex assembly operations with sub-millimeter accuracy.',
    status: 'In Progress',
    features: ['6 degrees of freedom (6-DOF)', 'Sub-millimeter precision repeatability', 'Integrated computer vision for dynamic picking', 'Force-torque sensors for delicate handling', 'ROS (Robot Operating System) compatibility'],
    challenges: 'Achieving dynamic grasping of irregularly shaped objects moving on a fast conveyor belt.',
    solution: 'Integrated a 3D depth camera with a custom neural network trained on synthetic data to predict optimal grasp poses in milliseconds.'
  },
  {
    id: 'inspection-robot',
    title: 'INSPECTION ROBOT',
    technologies: 'UGV, Camera',
    image: '/inspection_robot_1783827992312.png',
    description: 'A compact crawler designed for inspecting pipelines, structural integrity, and hard-to-reach areas.',
    longDescription: 'The Inspection Robot is a low-profile crawler that fits into tight spaces, making it perfect for pipeline inspections, under-vehicle scanning, and structural assessments of bridges and tunnels. It features a pan-tilt-zoom (PTZ) camera and various non-destructive testing (NDT) sensors.',
    status: 'Completed',
    features: ['Low-profile design for confined spaces', 'High-definition PTZ camera with LED illumination', 'Magnetic tracks for vertical climbing', 'Ultrasonic thickness measurement', 'Tethered and untethered operation modes'],
    challenges: 'Maintaining traction and mobility inside slippery, curved pipes of varying diameters.',
    solution: 'Designed adaptive tracks with specialized rubber compounds and a passive articulation joint to conform to pipe curvatures.'
  },
  {
    id: 'agricultural-robot',
    title: 'AGRICULTURAL ROBOT',
    technologies: 'AI, IoT, GPS',
    image: '/agricultural_robot_1783828005575.png',
    description: 'Smart farming assistant for automated crop monitoring, precision spraying, and yield analysis.',
    longDescription: 'Revolutionizing modern farming, this Agricultural Robot autonomously navigates crop rows to perform precision spraying, weed detection, and soil analysis. By utilizing targeted interventions, it significantly reduces chemical usage while maximizing crop yields and farm efficiency.',
    status: 'Research phase',
    features: ['RTK GPS for centimeter-level navigation', 'Multispectral cameras for plant health analysis', 'Targeted micro-spraying system', 'Solar panel integration for extended operation', 'Automated docking and refilling station'],
    challenges: 'Accurately distinguishing between crops and weeds of similar appearance under varying lighting conditions.',
    solution: 'Developed a robust vision model trained on tens of thousands of annotated field images, augmented with multi-spectral data.'
  },
  {
    id: 'humanoid-robot',
    title: 'HUMANOID ROBOT',
    technologies: 'AI, Motion',
    image: '/humanoid_robot_1783828014839.png',
    description: 'A bipedal humanoid robot focusing on natural motion and human-robot interaction.',
    longDescription: 'Our Humanoid Robot project aims to bridge the gap between machines and humans. Focusing on natural gait generation, expressive gestures, and advanced NLP integration, this robot is designed for roles in customer service, healthcare assistance, and research into artificial general intelligence.',
    status: 'Research phase',
    features: ['Dynamic bipedal walking algorithms', 'Expressive facial display and voice synthesis', 'Advanced NLP for conversational interaction', 'Compliant joints for safe human interaction', 'Object manipulation with human-like hands'],
    challenges: 'Achieving stable bipedal walking on uneven terrain without a tether.',
    solution: 'Implemented Model Predictive Control (MPC) and whole-body optimization to dynamically adjust footsteps and balance.'
  },
  {
    id: 'autonomous-vehicle',
    title: 'AUTONOMOUS VEHICLE',
    technologies: 'AI, Sensors',
    image: '/auto_vehicle_1783828024359.png',
    description: 'Self-driving vehicle platform with comprehensive sensor fusion for safe autonomous navigation.',
    longDescription: 'This comprehensive Autonomous Vehicle platform serves as a testbed for next-generation self-driving technologies. It integrates LiDAR, radar, ultrasonic sensors, and multiple cameras to create a robust perception system capable of navigating complex urban environments safely.',
    status: 'In Progress',
    features: ['360-degree LiDAR and Radar sensor fusion', 'High-definition map integration', 'Pedestrian and cyclist intent prediction', 'V2X (Vehicle-to-Everything) communication capability', 'Redundant safety systems and computing modules'],
    challenges: 'Handling edge cases in urban driving, such as unpredictable pedestrian behavior or complex multi-lane intersections.',
    solution: 'Utilized reinforcement learning in high-fidelity simulation environments to train the planning module for thousands of complex scenarios.'
  }
];
