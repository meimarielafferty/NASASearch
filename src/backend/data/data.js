/***
 * 
 * This file contains all of the data pertaining to the links in the apps
 * 
 */


/***
 * CUSTOM CLASSES
 */
import Category from './classes/category.js';
import Link from './classes/link.js';


// Stores every Category instance
export var allLinks = [];


/***
 * 
 * GENERAL REFERENCE CATEGORY
 * 
 ***/
{
  var generalReference = new Category("generalReference", "General Reference", false);

  // POLICIES, PROCESSES, AND REQUIREMENTS CATEGORY - LINKS
  addlink(generalReference.links,
    'Data: EPRD, NPRD, &amp; FMD',
    'QuAD.html',
    null,
    null
  );
  addlink(generalReference.links,
    'Dictionaries, English',
    'http://www.refdesk.com/topdict.html'
  );
  addlink(generalReference.links,
    '<b>E</b>ngineering <b>Funda</b>mentals<br/>(Subscription Required)',
    'http://www.efunda.com/home.cfm',
    null,
    null,
    'Engineering Fundamentals (Subscription Required)'
  );
  addlink(generalReference.links,
    'Fast-Start Project Tools',
    'Documents/Fast_Start_Project_Tools.pdf',
    null,
    null
  );
  addlink(generalReference.links,
    'Measurement Conversion',
    'http://www.asknumbers.com/'
  );
  addlink(generalReference.links,
    'NASA Acronyms',
    'https://nasaacronyms.com/',
    null,
    null
  );
  addlink(generalReference.links,
    'NASA APPEL Knowledge Services',
    'https://appel.nasa.gov/'
  );
  addlink(generalReference.links,
    'NASA KM Search (Goldfire)',
    'https://kmsearch.jsc.nasa.gov/',
    '(NASA internal)',
    null
  );
  addlink(generalReference.links,
    'NASA Library',
    'https://nasa.libanswers.com/',
    '(NASA internal)',
    null
  );
  addlink(generalReference.links,
    'NASA Photos (Images)',
    'http://www.nasa.gov/multimedia/imagegallery/index.html'
  );
  addlink(generalReference.links,
    'NASA Technical Reports Server (NTRS)',
    'https://ntrs.nasa.gov/'
  );
  addlink(generalReference.links,
    'Probability Distribution Functions',
    'Probability_Distribution_Functions.html',
    null,
    null
  );
  addlink(generalReference.links,
    'Physics, Chemistry, and Math',
    'http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html',
    null,
    null
  );
  addlink(generalReference.links,
    'Reliability Engineering Search',
    'http://reliabilityanalyticstoolkit.appspot.com/reliability_engineering_search'
  );
  addlink(generalReference.links,
    'Statistics Handbook',
    'http://www.itl.nist.gov/div898/handbook/index.htm'
  );
  addlink(generalReference.links,
    'USAFacts',
    'https://usafacts.org/'
  );
  addlink(generalReference.links,
    'Writing Resources',
    'writingResources.html'
  );

}


/***
 * 
 * FOUNDATIONS CATEGORY
 * 
 ***/
{
  var foundations = new Category("foundations", "Foundations", true);

  // FOUNDATIONS CATEGORY - SUBCATEGORY: BASIC CONCEPTS
  {
    var basicConcepts = foundations.addSubcategory("Basic Concepts");

    addlink(basicConcepts.links,
      'Reliability',
      'WhatIsReliability.html',
      null,
      null
    );
    addlink(basicConcepts.links,
      'Reliability Discipline',
      'Documents/Reliability_Discipline_Overview_of_Methods.pdf'
    );
    addlink(basicConcepts.links,
      'Availability',
      'Availability.html',
      null,
      null
    );
    addlink(basicConcepts.links,
      'Risk',
      'Documents/181120 Risk_concept and operation.pdf'
    );
    addlink(basicConcepts.links,
      'Risk, Failure Probability, and Failure Rate',
      'Documents/170505_Risk_Failure_Probability_and_Failure_Rate.pdf'
    );
    addlink(basicConcepts.links,
      'Mission Assurance',
      'WhatIsMissionAssurance.html'
    );
    addlink(basicConcepts.links,
      'Probability &amp; Verification',
      'ProbabilityAndVerification.html',
    );
  }

  // FOUNDATIONS CATEGORY - SUBCATEGORY: PRESENTATIONS AND TRAINING
  {
    var presentationsAndTraining = foundations.addSubcategory("Presentations and Training");

    addlink(presentationsAndTraining.links,
      'Metrics for Managed Organizations',
      'Documents/160922_Management_Metrics_A_Primer.pdf'
    );
    addlink(presentationsAndTraining.links,
      'Tutorial: Quantitative RMA for the Practitioner',
      'Documents/181016 Quantitative RMA for the Practitioner Tim Adams.pdf'
    );
    addlink(presentationsAndTraining.links,
      'Examples: Quantitative Reliability in Action',
      'Documents/181121 Decisions Under Risk_rev d.pdf'
    );
    addlink(presentationsAndTraining.links,
      'Availability: Concepts and Principles for the Practitioner',
      'Documents/190911.1_Availability_concepts_and_principles_for_the_practitioner.pdf'
    );
    addlink(presentationsAndTraining.links,
      'NASA Safety Center STEP',
      'http://nsc.nasa.gov/STEP/',
      '(NASA internal)'
    );
    addlink(presentationsAndTraining.links,
      'Other',
      'SelfStudy.html',
      null,
      null
    );

  }

  // FOUNDATIONS CATEGORY - SUBCATEGORY: ORGANIZATIONS
  {
    var organizations = foundations.addSubcategory("Organizations");

    addlink(organizations.links,
      'NASA Office of Safety and Mission Assurance (OSMA)',
      'https://sma.nasa.gov/'
    );
    addlink(organizations.links,
      'DoD, OUSD (R &amp; E) R &amp; M Engineering',
      'https://www.cto.mil/sea/rm/',
      null,
      null
    );
    addlink(organizations.links,
      'Other',
      'Organizations.html',
      null,
      null
    );
  }

  // FOUNDATIONS CATEGORY - SUBCATEGORY: HISTORY
  {
    var historySubcat = foundations.addSubcategory("History");

    addlink(historySubcat.links,
      'Short History of Reliability, by James McLinn',
      'Documents/History_of_Reliability.pdf'
    );
    addlink(historySubcat.links,
      'History of Reliability and Quality Assurance at KSC',
      'Documents/QualityKHR20.pdf'
    );
    addlink(historySubcat.links,
      'Design Reliability (RBDA &amp; FMEA), KSC Engineering 1974',
      'https://sp.ksc.nasa.gov/sites/sre/concepts/History/Design_Reliability_Analysis_KSC_Engineering_GP1040_1974.PDF',
      '(NASA internal)'
    );
    addlink(historySubcat.links,
      'KSC Component Failure Rates 1972',
      'Documents/KSC_Component_Failure Rates_May_1972.pdf'
    );
  }

  // FOUNDATIONS CATEGORY - SUBCATEGORY: APOLLO PROGRAM
  {
    var apollo = foundations.addSubcategory("Apollo Program");

    addlink(apollo.links,
      'Reliability in the Apollo Program',
      'Documents/122001_Reliability_in_the_Apollo_Program.pdf'
    );
    addlink(apollo.links,
      'Technical Manual: Apollo Reliability',
      'https://sp.ksc.nasa.gov/sites/sre/concepts/History/Apollo_Technical_Manual_Reliability.pdf',
      '(NASA internal)'
    );
    addlink(apollo.links,
      'Dr. Kurt H. Debus: Contributions, Legacy, and Challenges',
      'Documents/IAA_01_IAA.pdf'
    );
  }
} // FOUNDATIONS CATEGORY


/***
 * 
 * POLICIES, PROCESSES, AND REQUIREMENTS CATEGORY
 * 
 ***/
{
  var policies = new Category("policies", "Policies, Processes, <br>&amp; Requirements", false);

  // POLICIES, PROCESSES, AND REQUIREMENTS CATEGORY - LINKS
  addlink(policies.links,
    'NASA-STD-8729 NASA R &amp; M Standard for Spaceflight and Support Systems',
    'https://standards.nasa.gov/standard/nasa/nasa-std-87291'
  );
  addlink(policies.links,
    'NPR 8705 Human-Rating Requirements for Space Systems',
    'https://nodis3.gsfc.nasa.gov/displayDir.cfm?t=NPR&c=8705&s=2C'
  );
  addlink(policies.links,
    'NPD 8700 NASA Policy for Safety and Mission Success',
    'https://nodis3.gsfc.nasa.gov/displayDir.cfm?t=NPD&c=8700&s=1E'
  );
  addlink(policies.links,
    'NPR 8705 Risk Classification for NASA Payloads',
    'https://nodis3.gsfc.nasa.gov/displayDir.cfm?t=NPR&c=8705&s=4'
  );
  addlink(policies.links,
    'Launch Svcs Risk Mitigation for NASA-Owned/Sponsored Payloads/Missions',
    'https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PD_8610_007D_&page_name=main&search_term=reliability'
  );
  addlink(policies.links,
    'Developing Performance-Based Reliability Requirements',
    'https://llis.nasa.gov/lesson/827'
  );

} // POLICIES, PROCESSES, AND REQUIREMENTS CATEGORY


/***
 * 
 * STANDARDS CATEGORY
 * 
 ***/
{
  var standards = new Category("standards", "Standards", false);

  // STANDARDS CATEGORY - LINKS
  addlink(standards.links,
    'Reliability Standards Search (Searches inside standard using key words)',
    'http://reliabilityanalyticstoolkit.appspot.com/reliability_standards_search'
  );
  addlink(standards.links,
    'Military Handbooks and Standards',
    'https://quicksearch.dla.mil/qsSearch.aspx',
    null,
    null
  );
  addlink(standards.links,
    'NASA Reliability Preferred Practices for Design and Test, Tech Memo 4322A, Feb 1999',
    'Preferred_practices.html'
  );
  addlink(standards.links,
    'NASA Lessons Learned',
    'NASALessonsLearned.html'
  );
  addlink(standards.links,
    'NASA Technical Standards System',
    'https://standards.nasa.gov/'
  );

} // STANDARDS CATEGORY


/***
 * 
 * TOOLS CATEGORY
 * 
 ***/
{
  var tools = new Category("tools", "Tools", true);

  // TOOLS CATEGORY - SUBCATEGORY: CALCULATORS
  {
    var calculators = tools.addSubcategory("Microsoft Excel Calculators for RMA");

    addlink(calculators.links,
      '1 -> Laws of Probability (quick reference)',
      'Documents/1_Laws_of_Probability_-_Quick_reference.pdf',
      null,
      null,
      'Laws of Probability (quick reference)'
    );
    addlink(calculators.links,
      '2 -> Calculate probability of any 1 or 2 failing out of 3, Item probabilities are different',
      'Documents/2_Calculate_probability_of_any_1_or_2_failing_out_of_3,_item_probabilities_are_different.xlsx',
      null,
      null,
      'Calculate probability of any 1 or 2 failing out of 3, Item probabilities are different'
    );
    addlink(calculators.links,
      '3 -> Calculate and compare system reliability for basic configurations',
      'Documents/3_Calculate_and_compare_system_reliability_for_basic_configurations.xlsx',
      null,
      null,
      'Calculate and compare system reliability for basic configurations'
    );
    addlink(calculators.links,
      '4 -> Describe, calculate, and compare 4 types of Steady-State Availability',
      'Documents/4_Describe,_calculate,_and_compare_4_types_of_Steady-State_Availability.xlsx',
      null,
      null,
      'Describe, calculate, and compare 4 types of Steady-State Availability'
    );
    addlink(calculators.links,
      '5a > Allocate inherent sys A without margin, roll up subsys R&M, and graph R & A',
      'Documents/5a_Allocate_inherent_sys_A_without_margin,_roll_up_subsys_R&M_(dashboard),_and_graph_R_&_A.xlsm',
      null,
      null,
      'Allocate inherent sys A without margin, roll up subsys R&M, and graph R & A'
    );
    addlink(calculators.links,
      '5b > Allocate inherent sys A with margin and minimum reliability',
      'Documents/5b_Allocate_inherent_sys_A_with_margin_and_minimum_reliability.xlsm',
      null,
      null,
      'Allocate inherent sys A with margin and minimum reliability'
    );
    addlink(calculators.links,
      '6 -> For demand-based data with and without failures calculate failure probability',
      'Documents/6_For_demand-based_data_with_and_without_failures_calculate_failure_probability_(classical_&_Bayesian).xlsx',
      null,
      null,
      'For demand-based data with and without failures calculate failure probability'
    );
    addlink(calculators.links,
      '7 -> For time-based data without failures calculate failure rate and MTBF',
      'Documents/7_For_time-based_data_without_failures_calculate_failure_rate_and_MTBF_(classical_and_Bayesian).xlsx',
      null,
      null,
      'For time-based data without failures calculate failure rate and MTBF'
    );
    addlink(calculators.links,
      '8a > Binomial, Requirements and 5 cases (quick reference)',
      'Documents/8a_Binomial,_Requirements_and_5_cases.pdf',
      null,
      null,
      'Binomial, Requirements and 5 cases (quick reference)'
    );
    addlink(calculators.links,
      '8b > Binomial, Calculate all 5 cases (failure-based)',
      'Documents/8b_Binomial,_Calculate_all_5_cases_(failure-based).xlsx',
      null,
      null,
      'Binomial, Calculate all 5 cases (failure-based)'
    );
    addlink(calculators.links,
      '8c > Binomial, Calculate program and mission reliability (k or more successes)',
      'Documents/8c_Binomial,_Calculate_program_reliability_and_mission_reliability_(k_or_more_successes).xlsm',
      null,
      null,
      'Binomial, Calculate program and mission reliability (k or more successes)'
    );
    addlink(calculators.links,
      '9a > Zero Failures, Calculate Reliability (presentation)',
      'Documents/9a_Zero_Failures,_Calculate_Reliability_(presentation).pdf',
      null,
      null,
      'Zero Failures, Calculate Reliability (presentation)'
    );
    addlink(calculators.links,
      '9b > Zero Failures, Calculate Reliability (tool)',
      'Documents/9b_Zero_Failures,_Calculate_Reliability_(tool).xlsx',
      null,
      null,
      'Zero Failures, Calculate Reliability (tool)'
    );
    addlink(calculators.links,
      '10 > Plan demonstrated reliability test with zero failures',
      'Documents/10_Plan_demonstrated_reliability_test_with_zero_failures.xlsm',
      null,
      null,
      'Plan demonstrated reliability test with zero failures'
    );
    addlink(calculators.links,
      '11 > Poisson, Calculate required number of spares or safe havens (r or less repairs)',
      'Documents/11_Poisson,_Calculate_required_number_of_spares_or_safe_havens_(r_or_less_repairs).xlsx',
      null,
      null,
      ' Poisson, Calculate required number of spares or safe havens (r or less repairs)'
    );
    addlink(calculators.links,
      '12 > Weibull and Lognormal, Use parameters to graph and compare two scenarios',
      'Documents/12_Weibull_and_Lognormal,_Use_parameters_to_graph_and_compare_two_scenarios.xlsm',
      null,
      null,
      'Weibull and Lognormal, Use parameters to graph and compare two scenarios'
    );
    addlink(calculators.links,
      '13 > Stress-Strength Interference, Calculate static reliability',
      'Documents/13_Stress-Strength_Interference,_Calculate_static_reliability.xlsm',
      null,
      null,
      'Stress-Strength Interference, Calculate static reliability'
    );
  }

  // TOOLS CATEGORY - SUBCATEGORY: SOFTWARE RELIABILITY
  {
    var physics = tools.addSubcategory("Software Reliability");

    addlink(physics.links,
      'Software Reliability | (umassd.edu)',
      'https://lfiondella.sites.umassd.edu/research/software-reliability/',
      null,
      null
    );
  }

  // TOOLS CATEGORY - SUBCATEGORY: TOOL SUITES
  {
    var suites = tools.addSubcategory("Tool Suites");

    addlink(suites.links,
      'Tools to convert time-based data to a probability distribution',
      'DistributionFitTools.html',
      '(NASA internal)'
    );
    addlink(suites.links,
      'Reliability Analytics Toolkit',
      'http://reliabilityanalyticstoolkit.appspot.com/'
    );
    addlink(suites.links,
      "Dr. Bob's Reliability Calculator",
      'Documents/drat301.xls'
    );
    addlink(suites.links,
      'Relyence',
      'https://kstosc-sys016.ndc.nasa.gov/Relyence/Account/Login?ReturnUrl=%2FRelyence%2F',
      '(NASA internal)'
    );
    addlink(suites.links,
      'Windchill Risk and Reliability (WRR)',
      'https://sp.ksc.nasa.gov/sites/sre/tools/relextool/default.aspx',
      '(NASA internal)'
    );
    addlink(suites.links,
      'Integrated Design &amp; Assurance System (IDAS)',
      'https://sp.ksc.nasa.gov/sites/sre/default.aspx',
      '(NASA internal)'
    );
  }
} // TOOLS CATEGORY


/***
 * 
 * GUIDELINES AND TECHNIQUES OVER THE LIFE CYCLE CATEGORY
 * 
 ***/
{
  var guidelines = new Category("guidelines", "Guidelines &amp; Techniques", true);

  // GUIDELINES AND TECHNIQUES CATEGORY - SUBCATEGORY: DECISION MAKING
  {
    var decisionmaking = guidelines.addSubcategory("Decision Making");

    addlink(decisionmaking.links,
      'A Pyramid of Decision Approaches',
      'Documents/A_Pyramid_of_Decision_Approaches.pdf'
    );
    addlink(decisionmaking.links,
      'Dept of Energy Guidebook to Decision-Making Methods',
      'Documents/Decision_Making_Guidebook_2002_Dept_of_Energy.pdf'
    );
    addlink(decisionmaking.links,
      'Decision Analysis in One Chart',
      'Documents/Decision_Analysis_in_One_Chart.pdf'
    );
    addlink(decisionmaking.links,
      'NASA Risk-Informed Decision Making Handbook',
      'https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20100021361.pdf'
    );
  }

  // GUIDELINES AND TECHNIQUES CATEGORY - SUBCATEGORY: SYSTEMS ENGINEERING
  {
    var systemsengineering = guidelines.addSubcategory("Systems Engineering");

    addlink(systemsengineering.links,
      'NASA Systems Engineering &quot;Toolbox&quot;',
      'Documents/SystemEngineeringTools_and_Techniques.pdf',
      '(Tip: Start with Appendix B)'
    );
    addlink(systemsengineering.links,
      'NASA Systems Engineering Handbook',
      'https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20170001761.pdf'
    );
    addlink(systemsengineering.links,
      'NASA System Safety Handbooks',
      'Handbooks.html'
    );
    addlink(systemsengineering.links,
      'Interface Definition &amp; Control',
      'https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19970018043.pdf'
    );
    addlink(systemsengineering.links,
      'Digital Engineering, MBSE, and MBMA',
      'DigitalEngineering.html'
    );
    addlink(systemsengineering.links,
      'Establishing &amp; Balancing High-Level S, R, &amp; M Requirements',
      'Documents/SRMrequire.pdf'
    );
    addlink(systemsengineering.links,
      'Allocating Reliability Given Requirements as a Fault Tree',
      'RLVExample.html'
    );
  }

  // GUIDELINES AND TECHNIQUES CATEGORY - SUBCATEGORY: RELIABILITY PHYSICS
  {
    var reliabilityphysics = guidelines.addSubcategory("Reliability Physics");

    addlink(reliabilityphysics.links,
      'NASA Physics of Failure Handbook',
      'https://ntrs.nasa.gov/citations/20230004376',
      null,
      null
    );
    addlink(reliabilityphysics.links,
      'Physics of Failure (Reliability Science), Tutorial Notes',
      'Documents/Physics_of_Failure_Reliability_Science.pdf',
      null,
      null
    );
    addlink(reliabilityphysics.links,
      'Introduction-paper, RAMS 2013',
      'https://sp.ksc.nasa.gov/sites/sre/concepts/Physics/Reliability Physics, RAMS 2013, paper.pdf',
      '(NASA internal)'
    );
    addlink(reliabilityphysics.links,
      'Introduction-slides, RAMS 2013',
      'https://sp.ksc.nasa.gov/sites/sre/concepts/Physics/Reliability Physics, RAMS 2013, slides.pdf',
      '(NASA internal)'
    );
    addlink(reliabilityphysics.links,
      'Reliability Prediction of Mechanical Equipment',
      'ReliabilityPredictionMechEquip.html'
    );
    addlink(reliabilityphysics.links,
      'Mechanical Design Reliability Handbook (from ASQ Reliability Division)',
      'Documents/Mechanical-Design-Reliability-Monograph.pdf'
    );
  }

  // GUIDELINES AND TECHNIQUES CATEGORY - SUBCATEGORY: SUCCESS-SPACE MODELING
  {
    var successspace = guidelines.addSubcategory("Success-Space Modeling");

    addlink(successspace.links,
      'Functional Flow Block Diagram (FFBD)',
      'Documents/Functional_Analysis_Module_V10.pdf'
    );
    addlink(successspace.links,
      'RMA Analysis via RBDA',
      'Documents/RMA.pdf'
    );
    addlink(successspace.links,
      'Reliability Block Diagram (RBD)',
      'https://sp.ksc.nasa.gov/sites/sre/concepts/RBD/Forms/AllItems.aspx',
      '(NASA internal)'
    );
  }

  // GUIDELINES AND TECHNIQUES CATEGORY - SUBCATEGORY: FIALURE-SPACE MODELING
  {
    var failurespace = guidelines.addSubcategory("Failure-Space Modeling");

    addlink(failurespace.links,
      'Failure Mode Effects and Criticality Analysis (FMECA)',
      'FMECA.html'
    );
    addlink(failurespace.links,
      'NASA Fault Tree Handbook with Aerospace Applications',
      'Documents/Fault_Tree_Handbook_with_Aerospace_Applications_August_2002.pdf'
    );
    addlink(failurespace.links,
      'NASA Probabilistic Risk Assessment (PRA) Guidebook',
      'https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20120001369.pdf'
    );
  }

  // GUIDELINES AND TECHNIQUES CATEGORY - SUBCATEGORY: BAYESIAN METHOD
  {
    var bayesian = guidelines.addSubcategory("Bayesian Method");

    addlink(bayesian.links,
      'Summary: Process and Comparison',
      'Documents/091130_Bayesian_statistics_Concept_Process_and_Example.pdf'
    );
    addlink(bayesian.links,
      'NASA Handbook on Bayesian Inference',
      'https://ntrs.nasa.gov/citations/20090023159'
    );
  }

  // GUIDELINES AND TECHNIQUES CATEGORY - SUBCATEGORY: UNCERTAINTY
  {
    var uncertainty = guidelines.addSubcategory("Uncertainty");

    addlink(uncertainty.links,
      'Summary: Concepts &amp; Principles',
      'Documents/170511_Uncertainty_in_Risk_Assessments.pdf'
    );
    addlink(uncertainty.links,
      'NUREG-1855, Vol 1, Report',
      'Documents/Uncertainties_Treatment_of_NUREG1855_vol 1.pdf'
    );
  }

  // GUIDELINES AND TECHNIQUES CATEGORY - SUBCATEGORY: MISCELLANEOUS
  {
    var miscellaneous = guidelines.addSubcategory("Miscellaneous");

    addlink(miscellaneous.links,
      'Laplace Test',
      'Documents/Laplace_Test.pdf'
    );
    addlink(miscellaneous.links,
      'Trending US Landfalling Hurricanes via the Laplace Test',
      'Documents/200220 Trending US Landfalling Hurricanes via the Laplace Test.xlsx'
    );
    addlink(miscellaneous.links,
      'NASA Reliability Centered Maintenance (RCM)',
      'Documents/NASA_RCM_Guide.pdf',
      null,
      null
    );
    addlink(miscellaneous.links,
      'Root Cause Analysis',
      'RootCauseAnalysis.html'
    );
    addlink(miscellaneous.links,
      'NASA JSC Work Process Improvement (NASA internal)',
      'https://sp.ksc.nasa.gov/sites/sre/concepts/Quality/Work_Process_Improvement.pdf',
      '(NASA internal)'
    );
  }
} // GUIDELINES AND TECHNIQUES OVER THE LIFE CYCLE CATEGORY


/***
 * 
 * STORYBOARD CATEGORY
 * 
 * this is the data for the storyboard cards printed at the bottom of the index page
 * 
 ***/
{
  var storyboard = new Category("storyboard", "Engineering Assurance Storyboard", false, '(Chrome Recommended)');

  // STORYBOARD CATEGORY - LINKS
  addlink(storyboard.links,
    'The Systems Engineering Engine" alt="The Systems Engineering Engine',
    'storyboard.html?diagram=1',
    null,
    null,
    null,
    'images/1_The_Systems_Engineering_Engine_thumb.png'
  );
  addlink(storyboard.links,
    'The System Safety Framework',
    'storyboard.html?diagram=2',
    null,
    null,
    null,
    'images/2_The_System_Safety_Framework._thumb.png'
  );
  addlink(storyboard.links,
    'Roles and Flow for Risk-Informed Decision Making',
    'storyboard.html?diagram=3',
    null,
    null,
    null,
    'images/3_Roles_and_Flow_for_Risk-Informed_Decision_Making_thumb.png'
  );
  addlink(storyboard.links,
    'Using a Fault Tree to Analyze Assurance Requirements',
    'storyboard.html?diagram=4',
    null,
    null,
    null,
    'images/4_Using_a_Fault_Tree_to_Analyze_Assurance_Requirements_thumb.png'
  );
  addlink(storyboard.links,
    'Balancing Safety, Reliability, and Maintainability Requirements',
    'storyboard.html?diagram=5',
    null,
    null,
    null,
    'images/5_Balancing_Safety_Reliability_and_Maintainability_Requirements_thumb.PNG'
  );
  addlink(storyboard.links,
    'Reliability from Formal Definition To Analytical Products',
    'storyboard.html?diagram=6',
    null,
    null,
    null,
    'images/Reliability_from_definition_to_analytical_products_thumb.png'
  );
  addlink(storyboard.links,
    'The Reliability Discipline’s Payoff is during the Design Phase',
    'storyboard.html?diagram=7',
    null,
    null,
    null,
    'images/7_The_Reliability_Discipline’s_Payoff_is_during_the_Design_Phase_thumb.png'
  );
  addlink(storyboard.links,
    'A Process for Reliability Analyses during the Design Phase',
    'storyboard.html?diagram=8',
    null,
    null,
    null,
    'images/8_A_Process_for_Reliability_Analyses_during_the_Design_Phase_thumb.png'
  );
  addlink(storyboard.links,
    'An Idealized Sequence for Reliability and Safety Analyses',
    'storyboard.html?diagram=9',
    null,
    null,
    null,
    'images/9_An_Idealized_Sequence_for_Reliability_and_Safety_Analyses_thumb.png'
  );
  addlink(storyboard.links,
    'Making a Reliability Block Diagram as a Fault Tree',
    'storyboard.html?diagram=10',
    null,
    null,
    null,
    'images/9.1_Making_a_Reliability_Block_Diagram_as_a_Fault_Tree_thumb.png'
  );
  addlink(storyboard.links,
    'Tasks for a Typical Probabilistic Risk Assessment (PRA)',
    'storyboard.html?diagram=11',
    null,
    null,
    null,
    'images/10_Tasks_for_a_Typical_Probabilistic_Risk_Assessment_(PRA)_thumb.png'
  );
  addlink(storyboard.links,
    'The Concept of a Scenarios',
    'storyboard.html?diagram=12',
    null,
    null,
    null,
    'images/11_The_Concept_of_a_Scenario_thumb.png'
  );
  addlink(storyboard.links,
    'PRA Construction, Linking Fault Trees to an Event Tree',
    'storyboard.html?diagram=13',
    null,
    null,
    null,
    'images/12_PRA_Construction_Linking_Fault_Trees_to_an_Event_Tree_thumb.png'
  );
  addlink(storyboard.links,
    'Components of a Reliability Centered Maintenance (RCM) Program',
    'storyboard.html?diagram=14',
    null,
    null,
    null,
    'images/Components_of_an_RCM_Program_thumb.png'
  );
  addlink(storyboard.links,
    'Maintenance Analysis Process',
    'storyboard.html?diagram=15',
    null,
    null,
    null,
    'images/Maintenance_Analysis_Process_thumb.png'
  );
  addlink(storyboard.links,
    'RCM Logic Tree',
    'storyboard.html?diagram=16',
    null,
    null,
    null,
    'images/RCM_Decision_Logic_Tree_thumb.png'
  );
} // STORYBOARD CATEGORY


/***
 * 
 * RELIABILITY PAGE CATEGORIES
 * 
 * WhatIsReliability.html
 * 
 ***/
{
  var reliabilityPG = new Category("reliabilityPG", "Reliability", true);

  // RELIABILITY PAGE - SUBCATEGORY: WHAT IS RELIABILITY
  {
    var whatisreliability = reliabilityPG.addSubcategory("What is Reliability?");

    addlink(whatisreliability.links,
      'Reliability: From Definition to Analytical Products',
      'Documents/Reliability_from_definition_to_analytical_products.pdf',
      null,
      null,
      null,
      'images/Reliability_from_definition_to_analytical_products_thumb.png'
    );
    addlink(whatisreliability.links,
      'Discussion and Example',
      'Documents/150814-3bWhatIsReliability.pdf',
      null,
      null,
      null,
      'images/150814-3bWhatIsReliability_thumb.png'
    );
    addlink(whatisreliability.links,
      'Presentation: What is Reliability?',
      'Documents/What is Reliability (Tim Adams).pdf',
      null,
      null,
      null,
      'images/What_is_Reliability_(Tim Adams)_thumb.png'
    );
  }

  // RELIABILITY PAGE - SUBCATEGORY: HOW TO DO RELIABILITY
  {
    var howtoreliability = reliabilityPG.addSubcategory("How to do Reliability")

    addlink(howtoreliability.links,
      'Presentation: How to do Quantitative Reliability',
      'Documents/Presentation_How_to_do_Quantitative_Reliability.pdf',
      null,
      null,
      null,
      'images/Presentation_How_to_do_Quantitative_Reliability_thumb.png'
    );
    addlink(howtoreliability.links,
      'Tutorial: RMA via parameters and Excel functions, Weibull cases, Data sources, Processes for modeling data',
      'Documents/Tutorial_RMA_via_parameters_and_Excel_functions.pdf',
      null,
      null,
      null,
      'images/Tutorial_RMA_via_parameters_and_Excel_functions_thumb.png'
    );
    addlink(howtoreliability.links,
      "Tutorial: RMA and spares via data and expert opinion, Analyst's tasks, Compare to COTS tools",
      'Documents/Tutorial_RMA_and_spares_via_data_and_expert_opinion.xlsm',
      null,
      null,
      null,
      'images/Excel_icon_thumb.png'
    );
  }
} // RELIABILITY PAGE CATEGORIES


/***
 * 
 * AVAILABILITY PAGE CATEGORY
 * 
 * Availability.html
 * 
 ***/
{
  var availabilityPG = new Category("availabilityPG", "What is Availability?", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(availabilityPG.links,
    'Availability Concepts',
    'Documents/Availability_What_is_it.pdf',
    null,
    null
  );
  addlink(availabilityPG.links,
    'Formulas for Inherent Availability Limited to Constant Rates Over time',
    'Documents/170508_FORMULAS_Inherent_Availability_and_Reliability_with_Constant_Failure_and_Repair_Rates.pdf'
  );
} // AVAILABILITY PAGE CATEGORY


/***
 * 
 * DIGITAL ENGINEERING PAGE CATEGORY
 * 
 * DigitalEngineering.html
 * 
 * ATTENTION ***
 * This link data must be updated here, AND
 * in the DigitalEngineering.html file
 * 
 ***/
{
  var digEngineerPG = new Category("digengineerPG", "Digital Engineering, MBSE, and MBMA", false);

  // Availability - LINKS
  addlink(digEngineerPG.links,
    'Introduction To Model-Based System Engineering (MBSE) and SysML by Incose/Lockheed',
    'https://www.incose.org/docs/default-source/delaware-valley/mbse-overview-incose-30-july-2015.pdf'
  );
  addlink(digEngineerPG.links,
    'NESC Academy - Systems Engineering',
    'https://nescacademy.nasa.gov/catalogs/58f99dd43fa0470c8184841b445f16a84d',
    '(NASA internal)'
  );
  addlink(digEngineerPG.links,
    'NASA Engineering Network - Community of Practice',
    'https://nen.nasa.gov/web/mbse',
    '(NASA internal)'
  );
  addlink(digEngineerPG.links,
    'NESC Academy - Systems Engineering',
    'https://nescacademy.nasa.gov/catalogs/58f99dd43fa0470c8184841b445f16a84d',
    '(NASA internal)'
  );
  addlink(digEngineerPG.links,
    'SysML - Systems Modeling Language',
    'http://www.omgsysml.org/'
  );
  addlink(digEngineerPG.links,
    'UML - Unified Modeling Language',
    'http://www.uml.org/'
  );
  addlink(digEngineerPG.links,
    'International Council on Systems Engineering (INCOSE)',
    'https://www.incose.org/'
  );
  addlink(digEngineerPG.links,
    'IBM Rational Rhapsody Designer by IBM',
    'https://www.ibm.com/us-en/marketplace/model-based-systems-engineering-platform'
  );
  addlink(digEngineerPG.links,
    'Innoslate by SPEC Innovations',
    'https://www.innoslate.com/systems-engineering/'
  );
  addlink(digEngineerPG.links,
    'Windchill Modeler (formerly Integrity Modeler) by PTC',
    'https://www.ptc.com/en/products/plm/functions/mbse'
  );
  addlink(digEngineerPG.links,
    'MagicDraw by No Magic',
    'https://www.nomagic.com/products/magicdraw'
  );
  addlink(digEngineerPG.links,
    'XLDyn',
    'http://www.xldyn.net/'
  );
  addlink(digEngineerPG.links,
    'Quick Reference Guides by No Magic',
    'https://www.nomagic.com/support/quick-reference-guides',
    null,
    null,
    'Quick Reference Guides by No Magic MBSE product help'
  );
  addlink(digEngineerPG.links,
    'Integrating Safety and Reliability Analysis into MBSE ToolKit, by MagicDraw Product Manager',
    'https://www.nomagic.com/images/papers/v20180719-INCOSE-IS-2018-Integrating-Safety-and-Reliability-Analysis-into-MBSE.pdf'
  );
  addlink(digEngineerPG.links,
    'The Myth and Reality of Model Based Systems Engineering (MBSE) by Rick Steiner',
    'https://go.nasa.gov/2pGkpQa',
    '(NASA internal)'
  );
  addlink(digEngineerPG.links,
    'Model-Based Mission Assurance - NASA OSMA',
    'https://sma.nasa.gov/sma-disciplines/model-based-mission-assurance'
  );
  addlink(digEngineerPG.links,
    "Model-Based Mission Assurance (MBMA): NASA's Assurance Future",
    'https://sma.nasa.gov/docs/default-source/News-Documents/model-based-mission-assurance.pdf'
  );

} // DIGITAL ENGINEERING PAGE CATEGORY


/***
 * 
 * DISTRIBUTION FIT TOOLS PAGE CATEGORY
 * 
 * DistributionFitTools.html
 * 
 * ATTENTION ***
 * This link data must be updated here, AND
 * in the DistributionFitTools.html file
 * 
 ***/
{
  var distributiontoolsPG = new Category("distributiontoolsPG", "Distribution-Fit Tools", false);

  // Availability - LINKS
  addlink(distributiontoolsPG.links,
    'Reliability &amp; Maintenance Analyst',
    'http://www.engineeredsoftware.com/rma.asp'
  );
  addlink(distributiontoolsPG.links,
    'Windchill Weibull',
    'https://sp.ksc.nasa.gov/sites/sre/tools/relextool/default.aspx',
    '(NASA internal)'
  );
  addlink(distributiontoolsPG.links,
    '@RISK',
    'https://www.palisade.com/risk/'
  );
} // DIGITAL ENGINEERING PAGE CATEGORY


/***
 * 
 * FMECA PAGE CATEGORY
 * 
 * FMECA.html
 * 
 ***/
{
  var fmecaPG = new Category("fmecaPG", "Failure Mode Effects and Criticality Analysis (FMECA)", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(fmecaPG.links,
    'Military Standard 1629A, 1980',
    'Documents/milstd1629_FMEA.pdf',
    null,
    null
  );
  addlink(fmecaPG.links,
    '(SLIDES) GSFC, 2016, Innovative Methodology for using FMECA as a Risk Assessment and Communication Tool',
    'Documents/FMECA_slides.pdf',
    null,
    null
  );
  addlink(fmecaPG.links,
    '(PAPER) GSFC, 2016, Innovative Methodology for using FMECA as a Risk Assessment and Communication Tool',
    'Documents/FMECA_paper.pdf',
    null,
    null
  );
} // FMECA PAGE CATEGORY


/***
 * 
 * GOLDFIRE PAGE CATEGORY
 * 
 * Goldfire.html
 * 
 ***/
{
  var goldfirePG = new Category("goldfirePG", "Goldfire", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(goldfirePG.links,
    'Application',
    'https://kmsearch.jsc.nasa.gov/',
    null,
    null
  );
  addlink(goldfirePG.links,
    'Quick-Start Guide',
    'Documents/Goldfire_quickstart.pdf',
    null,
    null
  );
} // GOLDFIRE PAGE CATEGORY


/***
 * 
 * HANDBOOKS PAGE CATEGORY
 * 
 * Handbooks.html
 * 
 ***/
{
  var handbooksPG = new Category("handbooksPG", "NASA System Safety Handbooks", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(handbooksPG.links,
    'Volume 1, NASA/SP-2010-580 (Concept: Framework for System Safety)',
    'https://ntrs.nasa.gov/citations/20120003291',
    null,
    null
  );
  addlink(handbooksPG.links,
    'Volume 2, NASA/SP-2014-612 (Operation: Guidance for Implementation)',
    'https://ntrs.nasa.gov/citations/20150015500',
    null,
    null
  );
} // HANDBOOKS PAGE CATEGORY


/***
 * 
 * IDAS PAGE CATEGORY
 * 
 * IDAS.html
 * 
 * ATTENTION ***
 * This link data must be updated here, AND
 * in the IDAS.html file
 * 
 ***/
{
  var idasPG = new Category("idasPG", "Integrated Design & Assurance System (IDAS)", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(idasPG.links,
    'IDAS Architecture (Diagram)',
    'Documents/IDAS/1_IDAS_Architecture_Diagram.pdf',
    null,
    null
  );
  addlink(idasPG.links,
    "IDAS Jan 2012: Pitch to JPL's Agency MBSE Symposium",
    'Documents/IDAS/2_KSCs_IDA_%20A_step_towards_MBSE.pdf',
    null,
    null
  );
  addlink(idasPG.links,
    'IDAS Apr 2010: Constellation at KSC used IDAS (AIAA paper)',
    'Documents/IDAS/3_2010_Constellation_GOP_RMA_AIAA_Paper.pdf',
    null,
    null
  );
  addlink(idasPG.links,
    "IDAS Aug 2008: Pitch to HQ and KSC S&amp;MA",
    'Documents/IDAS/4_IDAS_Overview.pdf',
    null,
    null
  );
  addlink(idasPG.links,
    'IDAS Jun 2008: Pitch to MSFC and NESC',
    'Documents/IDAS/5_IDAS_June_2008_Pitch.pdf',
    null,
    null
  );
  addlink(idasPG.links,
    "IDAS Jun 2007: Pitch to KSC Engineering",
    'Documents/IDAS/6_IDAS_June_2007_Pitch.pdf',
    null,
    null
  );
  addlink(idasPG.links,
    "IDAS May 2007: Vision, Mission, Goal and Need",
    'Documents/IDAS/7_IDAS_Challenge_Vision_Mission_and_Goal.pdf',
    null,
    null
  );
} // IDAS PAGE CATEGORY


/***
 * 
 * ACRONYMS PAGE CATEGORY
 * 
 * NASA_Acronyms.html
 * 
 ***/
{
  var acronymsPG = new Category("acronymsPG", "NASA Acronyms", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(acronymsPG.links,
    'NASA Acronyms',
    'https://nasaacronyms.com/',
    null,
    null
  );
  addlink(acronymsPG.links,
    'Safety & Mission Assurance Acronyms, Abbreviations, & Definitions, NASA-STD-8709.22',
    'https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20180004878.pdf',
    null,
    null
  );
} // ACRONYMS PAGE CATEGORY


/***
 * 
 * LESSONS LEARNED PAGE CATEGORY
 * 
 * NASALessonsLearned.html
 * 
 ***/
{
  var lessonslearnedPG = new Category("lessonslearnedPG", "NASA Lessons Learned", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(lessonslearnedPG.links,
    'NASA Public Lessons Learned System',
    'https://llis.nasa.gov/',
    null,
    null
  );
  addlink(lessonslearnedPG.links,
    'NASA Lessons Learned',
    'https://nen.nasa.gov/web/ll',
    '(NASA internal)',
    null
  );
} // LESSONS LEARNED PAGE CATEGORY


/***
 * 
 * NRC PAGE CATEGORY
 * 
 * NRC.html
 * 
 ***/
{
  var nrcPG = new Category("nrcPG", "Other Data Resources from NRC", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(nrcPG.links,
    'Component Unreliability and Unavailability and Initiating Event Frequencies',
    'http://www.nrc.gov/reading-rm/doc-collections/nuregs/contract/cr6928/',
    null,
    null
  );
  addlink(nrcPG.links,
    'Handbook of Parameter Estimation for Probabilistic Risk Assessment',
    'http://www.nrc.gov/reading-rm/doc-collections/nuregs/contract/cr6823/',
    null,
    null
  );
  addlink(nrcPG.links,
    'Common-Cause Failure Database and Analysis System',
    'http://www.nrc.gov/reading-rm/doc-collections/nuregs/contract/cr6268/',
    null,
    null
  );
} // NRC PAGE CATEGORY


/***
 * 
 * ORGANIZATIONS PAGE CATEGORY
 * 
 * Organizations.html
 * 
 ***/
{
  var organizationsPG = new Category("organizationsPG", "Organizations Related to Reliability", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(organizationsPG.links,
    'Accendo Reliability',
    'https://accendoreliability.com/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'American Institute of Aeronautics and Astronautics (AIAA)',
    'https://www.aiaa.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'American Society for Quality (ASQ) - Reliability Division',
    'http://www.asqrd.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'Center for Advanced Life Cycle Engineering (CALCE)',
    'http://www.calce.umd.edu/',
    null,
    null
  );
  addlink(organizationsPG.links,
    "CSIAC's Software Reliability",
    'https://www.csiac.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'Defense Systems Information Analysis (DSIAC)',
    'https://www.dsiac.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'DfRSoftware Company',
    'http://www.dfrsoft.com/',
    null,
    null
  );
  addlink(organizationsPG.links,
    "Government-Industry Data Exchange Program (GIDEP)",
    'http://www.gidep.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'Institute of Electrical and Electronics Engineers (IEEE) - Reliability Society',
    'http://rs.ieee.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'Institute of Environmental Sciences and Technology (IEST)',
    'http://www.iest.org/Default.aspx?TabID=10651',
    null,
    null
  );
  addlink(organizationsPG.links,
    "National Institute of Standards and Technology (NIST)",
    'https://www.nist.gov/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'Reliability and Maintainability Symposium (RAMS)',
    'http://rams.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'Reliability Analytics',
    'http://reliabilityanalytics.com/',
    null,
    null
  );
  addlink(organizationsPG.links,
    "Relyence",
    'https://relyence.com/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'RMQSI Knowledge Center (Quanterion Solutions)',
    'http://www.rmqsi.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'Society for Maintenance and Reliability Professionals (SMRP)',
    'https://smrp.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'Test Science',
    'https://testscience.org/',
    null,
    null
  );
  addlink(organizationsPG.links,
    "Warranty Week",
    'http://warrantyweek.com/',
    null,
    null
  );
  addlink(organizationsPG.links,
    'WeibullNEWS',
    'https://fultonfindings.com/',
    null,
    null
  );
} // ORGANIZATIONS PAGE CATEGORY


/***
 * 
 * PROBABILITY DISTRIBUTION FUNCTIONS PAGE CATEGORY
 * 
 * Probability_Distribution_Functions.html
 * 
 ***/
{
  var probabilitydistfuncPG = new Category("probabilitydistfuncPG", "Probability Distribution Functions", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(probabilitydistfuncPG.links,
    '@RISK Probability Distribution Functions',
    'Summary_by_Palisade_Corp.html',
    null,
    null
  );
  addlink(probabilitydistfuncPG.links,
    'Map and Summary by Dr. Lawrence M. Leemis',
    'http://www.math.wm.edu/~leemis/chart/UDR/UDR.html',
    null,
    null
  );
} // PROBABILITY DISTRIBUTION FUNCTIONS PAGE CATEGORY


/***
 * 
 * PROBABLITY AND VERIFICATION PAGE CATEGORY
 * 
 * ProbabilityAndVerification.html
 * 
 ***/
{
  var probAndVerPG = new Category("probabilityandverificationPG", "Probability &amp; Verification", false);

  // Availability - LINKS
  addlink(probAndVerPG.links,
    'Concepts &amp; Principles',
    'Documents/Verification_Concepts_Tutorial_Glossary.pdf'
  );
  addlink(probAndVerPG.links,
    'Laws of Probability - Quick Reference',
    'Documents/Laws_of_Probability_Quick_Reference.pdf'
  );

} // PROBABILITY AND VERIFICATION PAGE CATEGORY


/***
 * 
 * QUAD PAGE CATEGORY
 * 
 * QuAD.html
 * 
 ***/
{
  var quadPG = new Category("quadPG", "Quanterion Automated Databook (QuAD)", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(quadPG.links,
    'Description, License Agreement, and NASA Point of Contact',
    'Documents/QuAD_Description_License_Agreement_NASA_poc.pdf',
    null,
    null
  );
  addlink(quadPG.links,
    'Installation Requirements, Installation Procedure, and Getting Started',
    'https://sp.ksc.nasa.gov/sites/sre/tools/Quanterion%20Automated%20Databook/160115_QuAD_Installation_Requirements_Procedure_and_Getting_Started.pdf',
    '(NASA internal only)',
    null
  );
} // QUAD PAGE CATEGORY


/***
 * 
 * PREDICTION OF MECHANICAL EQUIPMENT PAGE CATEGORY
 * 
 * ReliabilityPredictionMechEquip.html
 * 
 ***/
{
  var equippredictPG = new Category("equippredictPG", "Reliability Prediction<br/>of Mechanical Equipment", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(equippredictPG.links,
    'Handbook of Reliability Prediction Procedures for Mechanical Equipment, US Navy, May 2011',
    'Documents/HandbookofMechanicalReliability.pdf',
    null,
    null
  );
  addlink(equippredictPG.links,
    'MechRel Software',
    'https://sp.ksc.nasa.gov/sites/sre/concepts/Physics/Forms/AllItems.aspx?RootFolder=%2Fsites%2Fsre%2Fconcepts%2FPhysics%2FReliability%20Prediction%20of%20Mechanical%20Equipment%2C%20US%20Navy%2FMechRel%20Software&FolderCTID=0x012000E2688A5327924A42AA7FC9C64A957CD0&View=%7BF2FFB5F6-4AB3-41D4-8F82-22E2C4F80151%7D',
    '(NASA internal)',
    null
  );
} // PREDICTION OF MECHANICAL EQUIPMENT PAGE CATEGORY


/***
 * 
 * ROOT CAUSE ANALYSIS PAGE CATEGORY
 * 
 * RootCauseAnalysis.html
 * 
 ***/
{
  var rootcauseanalysisPG = new Category("rootcauseanalysisPG", "Root Cause Analysis (RCA)", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(rootcauseanalysisPG.links,
    'Root Cause Analysis Compared',
    'Documents/RCA_Compared_4Tim2.pdf',
    null,
    null
  );
  addlink(rootcauseanalysisPG.links,
    'Principles of Causation',
    'https://www.youtube.com/watch?v=k7ItSa7B-5s',
    null,
    null
  );
} // ROOT CAUSE ANALYSIS PAGE CATEGORY


/***
 * 
 * SELF STUDY PAGE CATEGORY
 * 
 * SelfStudy.html
 * 
 ***/
{
  var selfstudyPG = new Category("selfstudyPG", "Self-Study and Professional Development Resources", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(selfstudyPG.links,
    'Discipline Overview by Wikipedia',
    'https://en.wikipedia.org/wiki/Reliability_engineering',
    null,
    null
  );
  addlink(selfstudyPG.links,
    'Tutorials and Technical Publications by RMQSI',
    'https://www.rmqsi.org/products-services/publications/',
    null,
    null
  );
  addlink(selfstudyPG.links,
    'Reliability Mathematics by Engineered Software',
    'http://www.engineeredsoftware.com/nasa/default.htm',
    null,
    null
  );
  addlink(selfstudyPG.links,
    'Thermodynamic Degradation and Physics of Failure by DfRSoft',
    'https://www.youtube.com/watch?v=QeEmmAhcKDo',
    null,
    null
  );
  addlink(selfstudyPG.links,
    'Find a Topic using Accendo Reliability’s Search',
    'https://accendoreliability.com/',
    null,
    null
  );
  addlink(selfstudyPG.links,
    'Technical References & Articles by ReliaSoft',
    'https://www.reliawiki.com/index.php/Main_Page',
    null,
    null
  );
} // SELF STUDY PAGE CATEGORY


/***
 * 
 * SUMMARY BY PALISADE PAGE CATEGORY
 * 
 * Summary_by_Palisade_Corp.html
 * 
 ***/
{
  var palisadesummaryPG = new Category("palisadesummaryPG", "Probability Distribution Functions Used by Palisade @RISK", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(palisadesummaryPG.links,
    'Palisade Summary (PDF file, 2005)',
    'Documents/Probability_Distribution_Functions.pdf',
    null,
    null
  );
  addlink(palisadesummaryPG.links,
    'Palisade Online Function Reference',
    'https://help.palisade.com/v8_1/en/@RISK/Function/Distribution-Functions.htm',
    null,
    null
  );
} // SUMMARY BY PALISADE PAGE CATEGORY


/***
 * 
 * TRAINING PAGE CATEGORY
 * 
 * Training.html
 * 
 ***/
{
  var trainingPG = new Category("trainingPG", "Training", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(trainingPG.links,
    'Reliability Ques (Tech Briefs)',
    'https://www.rmqsi.org/category/reliability-ques/',
    null,
    null
  );
  addlink(trainingPG.links,
    'Lunch time Learning Series',
    'https://www.rmqsi.org/products-services/training/lunchtime-learning-series',
    null,
    null
  );
} // TRAINING PAGE CATEGORY


/***
 * 
 * MISSION ASSURANCE PAGE CATEGORY
 * 
 * WhatIsMissionAssurance.html
 * 
 ***/
{
  var missionassurancePG = new Category("missionassurancePG", "What is Mission Assurance?", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(missionassurancePG.links,
    'A Systematic Process For Mission Success',
    'Documents/150814.4aMissionAssuranceWhatIsIt.pdf',
    null,
    null
  );
  addlink(missionassurancePG.links,
    'An Idealized Sequence for Producing Mission Assurance Analyses',
    'Documents/150914.4bWorkProcessforMissionAssuranceAnalyses.pdf',
    null,
    null
  );
} // MISSION ASSURANCE PAGE CATEGORY


/***
 * 
 * WRITING RESOURCES PAGE CATEGORY
 * 
 * writingResources.html
 * 
 ***/
{
  var writingresourcesPG = new Category("writingresourcesPG", "Writing Resources", false);

  // AVAILABILITY CATEGORY - LINKS
  addlink(writingresourcesPG.links,
    'Purdue Online Writing Lab (OWL)',
    'https://owl.english.purdue.edu/owl/section/1/',
    null,
    null
  );
  addlink(writingresourcesPG.links,
    'NASA KSC Engineering’s Technical Documentation Style Guide, KSC-DF-107',
    'Documents/KSC-DF-107_Rev_F_07082017.pdf',
    null,
    null
  );
  addlink(writingresourcesPG.links,
    'Keystroke combinations',
    'Documents/Keystroke_Combinations.pdf',
    null,
    null
  );
} // WRITING RESOURCES PAGE CATEGORY


/***
 * 
 * ADDLINK FUNCTION
 * 
 * can add links to Category or Subcategory classes
 * 'addhere' param should be the array you want to add the link to
 * 
 ***/
function addlink(addhere, title, url, label, status, searchtext, imgsrc) {
  // replace undefined values with null
  label = (label == undefined ? null : label);
  status = (status == undefined ? null : status);
  searchtext = (searchtext == undefined ? null : searchtext);
  imgsrc = (imgsrc == undefined ? null : imgsrc);

  let addme = new Link(title, url, label, status, searchtext, imgsrc);
  addhere.push(addme);
}
