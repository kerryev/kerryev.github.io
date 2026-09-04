/* =========================================================================
   SITE CONTENT — edit this file to update the website.
   You never need to touch the .html or other .js files for normal updates.

   QUICK GUIDE
   -----------
   • Add a project        -> copy the template object inside PROJECT_TEMPLATE
                              into the `projects` array below, fill it in.
   • Add a job             -> copy EXPERIENCE_TEMPLATE into `experience`.
   • Change skills/about   -> edit the `about` and `skills` objects.
   • Swap your photo       -> put the image in assets/ and update
                              about.photo below.
   • New tag, no styling?  -> it still works — unknown tags get an
                              automatic color from FALLBACK_TAG_COLORS.
                              To pick the color yourself, add it to
                              TAG_COLORS instead.
   ========================================================================= */

const SITE = {

  meta: {
    name: "Evan Kerr",
    role: "MechE Student",
    wip: "",
    lastUpdated: "September 2026",
    resumePdf: "pdf/resume.pdf",
    linkedin: "https://linkedin.com/in/evankerr10",
    email: "evankerr10@gmail.com",
  },

  about: {
    intro: "Hey all! Welcome to my site! Take a look around.",
    photo: "images/Home Page/evimage.jpg",          // replace this file with your own photo
    photoCaption: "Berchtesgaden, Germany",
    note: "This summer, I travelled to 9 countries on a backpack!",

    bullets: [
      { icon: "", html: '<span class="inline-label">4th-Year</span> Mechanical Engineering Student @ McMaster University' },
      { icon: "",   html: '<span class="inline-label">GPA: 3.85/4.0</span>, Dean\'s Honours List (x4), Student Senate Scholar (Top 1% Average)' },
      { icon: "", html: '<span class="inline-label">20 Months of Co-op</span> in Equipment Design Engineering &amp; Project Management' },
      { icon: "",   html: '<span class="inline-label">MSME Year Rep</span> (McMaster Society of Mechanical Engineers)' },
      { icon: "",   html: '<span class="inline-label">Teaching Assistant</span> – ENG1P13 (CAD, Materials Selection)' },
    ],

    funFacts: [
      { icon: "", html: "Lifting &amp; Running (New runner training for my first 10K!)" },
      { icon: "", html: "Travelling (See photo!)" },
      { icon: "", html: "Trying new food spots &amp; local cafes :)" },
    ],
  },

  skills: [
    {
      title: "Design & Analysis",
      lines: [
        { label: "CAD", value: "Autodesk Inventor, Siemens Solid Edge, SolidWorks, AutoCAD, GD&amp;T", sub: { label: "PLM", value: "Siemens Teamcenter" } },
        { label: "FEA", value: "ANSYS Mechanical (Static Structural, SS Thermal), NX Nastran" },
      ],
    },
    {
      title: "Manufacturing",
      lines: [
        { label: "Machining", value: "Lathe, Drill Press, Milling" },
        { label: "",          value: "3D-Printing, Laser Cutting" },
      ],
    },
    {
      title: "Additional Tools",
      lines: [
        { label: "Software",      value: "Python, MATLAB, C++, Arduino, Simulink" },
        { label: "Data Analysis", value: "Excel (MS Office), PowerBI" },
      ],
    },
  ],

  /* -----------------------------------------------------------------
     PROJECTS
     Fields:
       id       short unique slug, no spaces
       icon     one emoji shown if you don't supply an image
       title    card title (keep prefixes like "(WIP)" if relevant)
       image    OPTIONAL path to a real render/photo. Leave "" to use
                the auto-generated blueprint placeholder.
       tags     array of strings — used for the colored pills + filters
       summary  one-line description shown on hover/in table view
       details  longer paragraph(s) shown when the card is opened
       link     OPTIONAL url to a repo, report, or write-up
     ----------------------------------------------------------------- */
  projects: [
    {
      id: "pneumatic-end-effector",
      icon: "",
      title: "Conforming Pneumatic End Effector",
      image: "images/Conforming Pneumatic End Effector/portfolio1.png",
      tags: ["DESIGN, BUILD & TEST", "ANALYSIS (FEA/CFD)", "AUTOMOTIVE"],
      summary: "DFMA-driven pneumatic gripper design for an automotive assembly line.",
      details: "Designed an adaptive pneumatic end effector in collaboration with Honda of Canada Manufacturing (HCM) to alleviate shortcomings in the plant's existing lift assist systems. I was primarily involved with the mechanical design/analysis and manufacturing of the mechanical gripper assembly. The development of the mechanical gripper is displayed here.",
      link: "",
      format: "format1",
      format1: {
        calculationsLink: "pdf/calcs.pdf",
        engineeringDrawingsLink: "pdf/drawings.pdf",
        collaboration: {
          logo: "images/Conforming Pneumatic End Effector/finalscaled1.png",
          logoAlt: "Honda logo",
          partner: "Honda of Canada Manufacturing (HCM)",
        },
        primaryTheme: {
          title: "Project Overview",
          intro: "Designed an adaptive pneumatic end effector in collaboration with Honda of Canada Manufacturing (HCM) to alleviate shortcomings in the plant's existing lift assist systems. I was primarily involved with the mechanical design/analysis and manufacturing of the mechanical gripper assembly.",
        },
        sections: [
          {
            type: "sectionTitle",
            title: "Problem Definition & Concept Generation"
          },
          {
            type: "textPhotoCarousel",
            title: "Defining the Client Issues",
            text: "The team visited Honda of Canada Manufacturing (HCM) in Alliston, Ontario to identify shortcomings in the plant's existing lift assist systems.",
            bullets: [
              '<span class="inline-label">The Primary Issue: Single-Part Design</span> - Most lift assists on the line could only handle only one automotive component, driving up cost, setup time, and inflexibility.',
              '<span class="inline-label">Automotive Component Selection (PCA)</span> -  The team performed a principal component analysis (PCA) of the automotive components to identify the most common geometries and sizes, which informed the design of the adaptive gripper (see second photo).',
            ],
            photos: [
              {
                src: "images/Conforming Pneumatic End Effector/honda.jpg",
                alt: "On-site visit to Honda facility"
              },
              {
                src: "images/Conforming Pneumatic End Effector/parts.png",
                alt: "Principle component analysis of automotive components"
              }
            ],
          },
          {
            type: "textPhotoCarousel",
            title: "Concept Generation",
            text: "Following the site visit, my team and I centred on developing an adaptive end effector capable of handling varied part geometries.",
            bullets: [
              '<span class="inline-label">Design Concepts Considered (see photos)</span> - Fractal vises, jamming grippers, and conforming grid pins.',
              '<span class="inline-label">Concept Selected: Conforming Grid Pins</span> - Conforming pins were chosen based on ease of manufacturability, low cost, and high handling adaptability.',
            ],
            photos: [
              {
                src: "images/Conforming Pneumatic End Effector/fractalvise.png",
                alt: "Early concept sketches and prototypes - view 1"
              },
              {
                src: "images/Conforming Pneumatic End Effector/jamminggripper.png",
                alt: "Early concept sketches and prototypes - view 2"
              },
              {
                src: "images/Conforming Pneumatic End Effector/pins.png",
                alt: "Early concept sketches and prototypes - view 3"
              }
            ],
          },
          {
            type: "textPhotoSplit",
            title: "Pin-Spring Mechanism Breakdown",
            narrowPhoto: true,
            text: "An array of pins are fitted with individual springs, which allow individual compression at local surfaces.",
            bullets: [
              '<span class="inline-label">Spring Selection </span> - Springs are designed to carry required clamping force to maintain secure contact of specified lifting.',
              '<span class="inline-label">Washer to Bumper Force Transfer</span> - Washers are used to transfer the load directly from the bumper to the spring to absorb forces to specification.',
              '<span class="inline-label">Press-Fit Bearings for Pin Movement</span> - Bearings with translation fit will be directly press-fit into a mounting plate for clean pin movement.',
            ],
            photo: {
              src: "images/Conforming Pneumatic End Effector/pinasm1.png",
              alt: "Pin-spring assembly schematic showing compression springs, washer, and threaded bumper"
            }
          },
          {
            type: "sectionTitle",
            title: "Design Iterations & Scaled Development"
          },
          {
            type: "designIteration",
            title: "V0: Initial Design",
            description: "The preliminary assembly used 2 pneumatic cylinders with clamping plates carrying the pin-spring gripping concept.",
            bullets: [
              '<span class="inline-label">Guided Cylinder Selection</span> - Selected a guided cylinder to handle high bending strength and load transfer.',
              '<span class="inline-label">5×5 Pin Grid</span> - Pin sizing & spacing designed to fit the specified automotive components.',
              '<span class="inline-label">Design Limitations</span> - High stroke lengths introduces significantly higher bending stresses and long-term internal damage, even in guided cylinders. Loading introduces plate torque not meeting cylinder specifications.',
            ],
            photo: {
              src: "images/Conforming Pneumatic End Effector/v0.png",
              alt: "V0 initial design prototype"
            },
            photoWidth: "small"
          },
          {
            type: "designIteration",
            title: "V1: Refined Design",
            description: "The refined design centred the cylinder's line of action on the clamp to eliminate plate torque.",
            bullets: [
              '<span class="inline-label">Torque Eliminated</span> - Re-centred loading (both cylinders actuate on the same line of action), which removed plate torque at rated load conditions.',
              '<span class="inline-label">Reduced Cylinder Stroke Length</span> - Cylinder stroke sizing was cut to meet side-loading specifications.',
              '<span class="inline-label">Trade-Off</span> - The updated cylinder stroke length narrowed the range of gripping-opening sizes the assist can carry.',
            ],
            photo: {
              src: "images/Conforming Pneumatic End Effector/v1.png",
              alt: "V1 refined design prototype"
            },
            photoWidth: "small"
          },
          {
            type: "textPhotoSplit",
            title: "Scaled Down Design (Prototype)",
            text: "A scaled prototype was designed at 50% of required lifting capacity in order to meet cost constraints of the project while displaying critical design features of the lift assist assembly.",
            showCalculationsLink: true,
            showEngineeringDrawingsLink: true,
            photo: {
              src: "images/Conforming Pneumatic End Effector/portfolio1.png",
              alt: "Scaled down prototype"
            }
          },
          {
            type: "sectionTitle",
            title: "Manufacturing, Testing & Operating Specifications"
          },
          {
            type: "threeColumn",
            title: "Manufacturing & Testing",
            photoHeight: "large",
            skills: ["Drill Press", "Milling", "Band Saw", "Press-Fitting", "Welding (Aluminum)", "Shop Technician Coordination"],
            columns: [
              {
                heading: "Manufacturing",
                description: "Machining aluminum plates used to support bearings carrying the pin-spring mechanism.",
                photo: {
                  src: "images/Conforming Pneumatic End Effector/manufacturing.jpg",
                  alt: "Pneumatic mount with distribution block"
                }
              },
              {
                heading: "Full Assembly",
                description: "Completing the full mechanical gripper assembly with our specified pneumatic cylinder.",
                photo: {
                  src: "images/Conforming Pneumatic End Effector/assembly.jpg",
                  alt: "Complete gripper assembly"
                }
              }
            ]
          },
          {
            type: "sectionTitle",
            title: "Final Design & Operating Verification"
          },
          {
            type: "twoColumnWithSlideshow",
            title: "Operating Pressure & Final Assembly",
            leftColumnTitle: "Operating Air Pressure",
            leftColumnText: "Required air supply pressure vs. object mass, for rated gripping strength — full-scale specs, then the half-scale model.",
            showCalculationsLink: false,
            rightColumnTitle: "Final Gripping Mechanism Design",
            rightColumnText: "The final gripper assembly from the lift assist is shown below. Pneumatic components & fittings are not shown for clarity.",
            leftPhotos: [
              {
                src: "images/Conforming Pneumatic End Effector/fullscalespec.png",
                alt: "Full-scale cylinder operating pressure specification chart"
              },
              {
                src: "images/Conforming Pneumatic End Effector/scaleddownspec.png",
                alt: "Half-scale model operating pressure specification chart"
              }
            ],
            rightPhotos: [
              {
                src: "images/Conforming Pneumatic End Effector/finalscaled2.png",
                alt: "Completed pneumatic end effector, front view"
              },
              {
                src: "images/Conforming Pneumatic End Effector/finalscaled1.png",
                alt: "Completed pneumatic end effector, side view"
              }
            ]
          }
        ]
      }
    },
    {
      id: "wind-tunnel-turbulence",
      icon: "",
      title: "Wind Tunnel Turbulence Intensity Characterization",
      image: "images/Conforming Pneumatic End Effector/portfolio2.png",
      tags: ["DOE", "SENSING & DATA ANALYSIS", "AERODYNAMICS"],
      details: "Conducted a designed experiment (DOE) to characterize turbulence intensity across a wind tunnel test section using an Arduino-based data acquisition setup. Completed data analysis using filtration techniques in MATLAB.",
      link: "",
      format: "format1",
      format1: {
        heroImage: "images/Conforming Pneumatic End Effector/portfolio2.png",
        githubLink: "https://github.com/kerryev/Wind-Tunnel-TI",
        reportLink: "pdf/ti.pdf",
        primaryTheme: {
          title: "Project Overview",
          intro: "Conducted a designed experiment (DOE) to characterize turbulence intensity across a wind tunnel test section to confirm wind tunnel flow quality. Completed data analysis using filtration techniques in MATLAB.",
        },
        sections: [
          {
            type: "sectionTitle",
            title: "Apparatus & Turbulence Intensity"
          },
          {
            type: "textPhotoSplit",
            title: "Test Apparatus",
            narrowText: true,
            text: "An open blower-style wind tunnel from the MECA lab (McMaster Experimental and Computational Aero. Lab) was used to conduct the experiment.",
            extraBlocks: [
              {
                title: "What is Turbulence Intensity?",
                text: "Turbulence intensity (TI) is the metric used to characterize the strength of velocity fluctuations in fluid flow.",
                bullets: [
                  '<span class="inline-label">What it means</span>: Lower TI indicates better flow uniformity, critical for repetitive testing.',
                  '<span class="inline-label">Typical Range</span>: 0-5%.',

                ],
              },
            ],
            photo: {
              src: "images/Wind Turbulence Intensity Characterization/wind tunnel.png",
              alt: "Wind tunnel turbulence sensing apparatus"
            }
          },
          {
            type: "sectionTitle",
            title: "Test Overview"
          },
          {
            type: "threeColumn",
            columns: [
              {
                heading: "Shakedown Tests",
                description: "Completed shakedown tests to determine associate measurement error & uncertainty and confirm nominal wind tunnel flow conditions."
              },
              {
                heading: "Test 1 - TI vs. Fan Speed",
                description: "Collecting velocity measurements at three separate fan speeds to characterize TI changes by flow velocity."
              },
              {
                heading: "Test 2 - TI vs. Spatial Location",
                description: "Collecting velocity profile measurements across the vertical axis of the test section to map local turbulence intensity variations."
              }
            ]
          },
          {
            type: "sectionTitle",
            title: "Frequency Analysis & Error Profiling"
          },
          {
            type: "textPhotoCarousel",
            title: "FFT Analysis for Sample Rate and Filtration Selection",
            text: "Fast-Fourier Transforms (FFTs) were generated to identify artificial frequencies that are not reflective of true fluid nature. The first photo depicts the un-filtered FFT spectrum, while the second photo shows an added low-pass filter at 150Hz from a baseline measurement.",
            bullets: [
              '<span class="inline-label">Selected Sample Rate</span> - 1kHz, Provides adequate sampling for frequencies of interest (primarily < 100 Hz) given the Nyquist criterion (f < 500Hz).',
              '<span class="inline-label">Spike Frequency</span> - 377 Hz, Attributed to the natural frequency of the pitot tube.',
              '<span class="inline-label">Cutoff Frequency</span> - 150 Hz, Used a low-pass filter (Butterworth) to filter out the pitot tube natural frequency and high frequency sensor noise.',
            ],
            photos: [
              {
                src: "images/Wind Turbulence Intensity Characterization/fft1.png",
                alt: "FFT spectrum placeholder — replace with the real FFT plot in images/"
              },
              {
                src: "images/Wind Turbulence Intensity Characterization/fft2.png",
                alt: "Wavelet transform placeholder — replace with the real wavelet plot in images/"
              }
            ],
          },
          {
            type: "threeColumn",
            title: "Error Profile",
            columns: [
              {
                number: "1",
                heading: "Precision",
                description: "Bounds the spread of repeated readings about the mean at a given confidence level.",
                formula: "U<sub>precision</sub> = ±z<sub>α/2</sub>σ<sub>x</sub>"
              },
              {
                number: "2",
                heading: "Drift",
                description: "Captures bias introduced by the sensor reading shifting between the start and end of a test.",
                formula: "δU<sub>drift,bias</sub> ≈ ±|x̄<sub>final</sub> − x̄<sub>initial</sub>|"
              },
              {
                number: "3",
                heading: "Sensitivity",
                description: "Accounts for combined linearity and hysteresis error as a percentage of full-scale sensor output.",
                formula: "δU<sub>lin,hyst</sub> = ±(0.25/100)FS<sub>sensor</sub>"
              }
            ]
          },
          {
            type: "sectionTitle",
            title: "Test Results"
          },
          {
            type: "threeColumn",
            splitCards: true,
            columns: [
              {
                heading: "Test 1 Results",
                description: "As shown below, the TI is much larger at lower fan speeds, but maintains acceptable ranges. The turbulence intensity jump at 20Hz was concluded to be attributed to sensor noises & sensitivity errors becoming more dominant in the resulting sensor signal. ",
                photo: {
                  src: "images/Wind Turbulence Intensity Characterization/tifreq.png",
                  alt: "Test 1 velocity fluctuation results"
                }
              },
              {
                heading: "Test 2 Results",
                description: "As shown below, the TI shows a noticeable increase at the edges of the test section, primarily due to lower velocities at the centre of flow. This was concluded to be attributed to limited flow profile settlement from the fan. Regardless, the TI maintains an acceptable range.",
                photo: {
                  src: "images/Wind Turbulence Intensity Characterization/tipos.png",
                  alt: "Test 2 DOE results"
                }
              }
            ]
          },
          {
            type: "link",
            text: "To see in-depth results of shakedown tests, FFT/wavelets, error calculations, and TI calculations, click the link to the report."
          }
        ]
      }
    },
    {
      id: "industrial-wrench-profile",
      icon: "",
      title: "Industrial Wrench Profile Optimization",
      image: "images/Industrial Wrench Profile Optimization/portfolio3.png",
      tags: ["ANALYSIS (FEA/CFD)"],
      summary: "Topology-informed profile optimization of an industrial wrench under load.",
      detail: "",
      link: "",
      format: "format1",
      format1: {
        heroImage: "images/Industrial Wrench Profile Optimization/closeup.png",
        reportLink: "pdf/feaproj.pdf",
        primaryTheme: {
          title: "Project Overview",
          intro: "This project involved the optimization of a standard wrench profile subject to specified torque under known geometric constraints and allowable stress and deflection limits. A total of five design optimizations were completed in ANSYS.",
        },
        sections: [
          {
            type: "sectionTitle",
            title: "Problem Definition"
          },
          {
            type: "textPhotoSplit",
            title: "Problem Definition",
            narrowText: true,
            text: "The rough outline of the wrench is shown to the right, where dashed lines show geometry that can be modified such that experienced stresses and deflection do not exceed allowable limits.",
            photo: {
              src: "images/Industrial Wrench Profile Optimization/initialdiagram.png",
              alt: "Loading and boundary condition diagram placeholder — replace with images/wrench-diagram.png"
            }
          },
          {
            type: "threeColumn",
            columns: [
              {
                heading: "Design Constraints",
                bullets: [
                  '<span class="inline-label">Material Properties</span>: Yield Stress = 163MPa, Poisson\'s Ratio = 0.3, Young\'s Modulus = 210GPa',
                  '<span class="inline-label">Deflection Limit</span>: < 0.5mm',
                  '<span class="inline-label">Geometric Constraints</span>: L = 92mm, d = 8.5mm',
                ]
              },
              {
                heading: "Assumptions",
                bullets: [
                  '<span class="inline-label"></span> Vertical loading applied at the handle to represent the applied hand force.',
                  '<span class="inline-label"></span> Fixed boundary condition applied at the jaw contact surfaces (bolt/nut interface).',
                ]
              }
            ]
          },
          {
            type: "sectionTitle",
            title: "Initial Case"
          },
          {
            type: "resultsSplit",
            photos: [
              {
                src: "images/Industrial Wrench Profile Optimization/startstress.png",
                alt: "Initial model deflection result placeholder — replace with images/wrench-initial-defl.png"
              },
              {
                src: "images/Industrial Wrench Profile Optimization/startdefl.png",
                alt: "Initial model stress result placeholder — replace with images/wrench-initial-stress.png"
              }
            ],
            table: {
              headers: ["Volume (mm³)", "Number of Elements", "Number of Nodes", "Max Stress (MPa)", "Max Deflection (mm)"],
              values: ["2651.3", "4967", "15962", "296.91", "0.7565"],
              highlightCols: [3, 4],
              highlightType: "bad"
            },
            bulletsTitle: "Observations & Changes",
            bullets: [
              '<span class="inline-label">Observations</span>: Yields at the cutouts due to high stress concentration, the inner jaw from worst-case rigidity due to fixed boundary conditions, and at the ends of the arm due to bending.',
              '<span class="inline-label">Changes</span>: Add additional material around the cutout location and the arm to reduce local stress and improve bending strength, and a smoother transition to the jaw section to smoothen stress gradients.',
            ]
          },
          {
            type: "sectionTitle",
            title: "Final Iteration"
          },
          {
            type: "resultsSplit",
            photos: [
              {
                src: "images/Industrial Wrench Profile Optimization/finalstress.png",
                alt: "Final model deflection result placeholder — replace with images/wrench-final-defl.png"
              },
              {
                src: "images/Industrial Wrench Profile Optimization/finaldefl.png",
                alt: "Final model stress result placeholder — replace with images/wrench-final-stress.png"
              }
            ],
            table: {
              headers: ["Volume (mm³)", "Number of Elements", "Number of Nodes", "Max Stress (MPa)", "Max Deflection (mm)"],
              values: ["4306.3", "7939", "24755", "160.93", "0.1983"],
              highlightCols: [3, 4]
            },
            bulletsTitle: "Observations",
            bullets: [
              '<span class="inline-label">Simulation Result</span>: The final iteration contained strengthening in all the proposed areas, meeting both stress and deflection limitations, but resulting in a near 2x volume increase. Majority of strengthening was due to stresses at the inner jaw.',
              '<span class="inline-label">Checks</span>: To ensure stresses at the inner jaw were correct, radii were applied to the inner jaw edges to remove singularities, and a mesh sensitivity was completed to confirm convergence.',
            ]
          },
          {
            type: "threeColumn",
            photoHeight: "large",
            columns: [
              {
                heading: "Sensitivity Analysis",
                bubbleHeading: true,
                textFirst: true,
                photos: [
                  {
                    src: "images/Industrial Wrench Profile Optimization/sensanal.png",
                    alt: "Sensitivity analysis result placeholder — replace with images/wrench-sens-analysis.png",
                    contain: true
                  },
                  {
                    src: "images/Industrial Wrench Profile Optimization/closeup.png",
                    alt: "Second sensitivity analysis result placeholder — replace with images/wrench-sens-analysis-2.png",
                    contain: true
                  }
                ],
                description: "A mesh sensitivity analysis was completed to confirm convergence of correct stress results at designed areas, specifically at the inner jaw of the wrench. This was an expected area of failure due to high rigidity at the region from fixed boundary conditions."
              }
            ]
          },
          {
            type: "link",
            text: "To see the full FEA methodology, mesh convergence, and calculations, click the link to the report."
          }
        ]
      }
    },
    /*
    {
      id: "spoiler-downforce",
      icon: "",
      title: "Spoiler Downforce Optimization",
      image: "images/portfolio5.png",
      tags: ["ANALYSIS (FEA/CFD)"],
      summary: "Starting July 2026",
      details: "Parametric CAD model of a rear spoiler, iterated against CFD-predicted downforce and drag coefficients across angle-of-attack sweeps. FEA used to confirm the optimized profile meets stiffness requirements under aerodynamic loading.",
      link: "",
    },
    */
  
    {
      id: "cubesat-tracking-estimation",
      icon: "",
      title: "Spacecraft Tracking and Estimation Using CubeSat Data",
      image: "images/Spacecraft Tracking and Estimation Using CubeSat Data/porfolio5.jpg",
      tags: ["SENSING & DATA ANALYSIS"],
      summary: "Starting September 2026",
      details: "Commencing in Fall 2026 in collaboration with the Intelligent and Cognitive Engineering Lab (ICE) at McMaster.",
      link: "",
    },
    /*
    {
      id: "other-fea-cfd-studies",
      icon: "",
      title: "Other FEA/CFD Studies",
      image: "",
      tags: ["ANALYSIS (FEA/CFD)"],
      summary: "A running collection of smaller FEA/CFD studies and coursework.",
      details: "Smaller, self-contained studies that don't warrant their own card yet — add new sub-projects here as they're finished, or split one out into its own card later.",
      link: "",
    },
    */

    /* PROJECT_TEMPLATE — copy below this line to add a new project
    {
      id: "your-project-slug",
      icon: "",
      title: "Project Title",
      image: "",
      tags: ["Tag1", "Tag2"],
      summary: "One sentence summary.",
      details: "Longer description of what you did, why, and the outcome.",
      link: "",
    },
    */
  ],

  /* -----------------------------------------------------------------
     WORK EXPERIENCE
     Replace the bracketed [placeholders] with your real details.
     Keep entries in reverse-chronological order (most recent first).
     ----------------------------------------------------------------- */
  experience: [
    {
      dateRange: "May 2024 – August 2025",
      company: "Hatch Ltd.",
      role: "Mechanical Engineering Intern - Technologies",
      skills: ["Autodesk Inventor", "ANSYS (FEA)", "Solid Edge & Teamcenter", "AutoCAD", "Python", "Tolerance Stack-Up Analysis"],
      bullets: [
        'Designed & tested sensor fixture equipment for Machine Vision applications in <span class="inline-label">Autodesk Inventor</span>, maintaining calibration resolution of <span class="inline-label">50nm</span>. Verified <span class="inline-label">DFM</span> compliance for <span class="inline-label">10+</span> sheet metal parts with vendors.',
        'Verified thermal expansion compliance for furnace heat shields using <span class="inline-label">tolerance stack-up analysis</span>, ensuring designed hydraulic equipment service life under high-temperature conditions. Drafted package fabrication & general assembly drawings reviewed in <span class="inline-label">Bluebeam</span>.',
        'Effectively contributed to the mechanical design of furnace power system structural equipment using <span class="inline-label">Solid Edge</span> and <span class="inline-label">Teamcenter</span>. Verified structural integrity in <span class="inline-label">ANSYS</span>, identifying and re-designing weldment components to reduce critical stresses by <span class="inline-label">35%</span>.',
        'Evaluated changes in thermal stresses from power system structural refinements in <span class="inline-label">ANSYS</span>, reducing equivalent stresses by <span class="inline-label">12%</span>. Generated 3D thermal-structural models of working 2D furnace models, improving accuracy by reducing expected equivalent stresses by <span class="inline-label">9%</span>.',
        'Drafted multi-phase steel plant layouts in <span class="inline-label">AutoCAD</span> for a process feasibility study. Integrated design feedback through weekly design reviews, as well as weeklong workshops on site with <span class="inline-label">30+</span> international stakeholders.',
        'Developed a <span class="inline-label">Python</span>-based probabilistic corrosion model based on NDT inspections, streamlining data entry to reduce setup time by <span class="inline-label">74%</span>. Validated statistical accuracy in <span class="inline-label">MathCAD</span>.',
        'Actively participated in the Hatch Technologies <span class="inline-label">Health & Safety Committee</span>, coordinating internal planning & monitoring <span class="inline-label">40+</span> key initiatives to identify and mitigate workplace hazards & promote H&S culture within Technologies.',
        'Prepared & presented in-house safety training content to <span class="inline-label">30+</span> individuals, reviewing site safety planning & incident management procedures, and training & <span class="inline-label">PPE</span> requirements based on <span class="inline-label">OHSA</span> standards.',
      ],
    },
    {
      dateRange: "May 2023 – August 2023",
      company: "Ericsson",
      role: "Project Planner Intern",
      skills: ["Jira", "Microsoft Project", "Excel", "KPI Dashboards"],
      bullets: [
        'Optimized <span class="inline-label">Project Controls</span> workflows for <span class="inline-label">KPI dashboards</span> & QA documentation, directly supporting Engineering Managers in tracking deliverables and maintaining audit-readiness.',
        'Designed automated workflows and <span class="inline-label">KPI dashboards</span> in <span class="inline-label">Jira</span>, enhancing reporting efficiency and internal documentation processes for project delivery quality.',
        'Managed data organization for <span class="inline-label">70+</span> ongoing project plans under <span class="inline-label">20+</span> PMs using <span class="inline-label">Microsoft Project</span> and <span class="inline-label">Excel</span>, reducing reporting errors by <span class="inline-label">127%</span>.',
      ],
    },

    /* EXPERIENCE_TEMPLATE — copy below this line to add a new job
    {
      dateRange: "Month Year – Month Year",
      company: "Company Name",
      role: "Role Title",
      skills: ["Tool 1", "Tool 2"],
      bullets: [
        "Bullet one.",
        "Bullet two.",
      ],
    },
    */
  ]
}

/* -----------------------------------------------------------------------
   TAG COLORS
   Pre-set colors for the tags already in use. Anything not listed here
   automatically gets a color from FALLBACK_TAG_COLORS (same color every
   time, picked deterministically from the tag name) so new tags never
   look broken.
   ----------------------------------------------------------------------- */
const TAG_COLORS = {
  "DESIGN, BUILD & TEST": { bg: "#522019", fg: "#d1d8df" },
  AUTOMOTIVE:   { bg: "#1e3a52", fg: "#b8d9ed" },
  "ANALYSIS (FEA/CFD)":    { bg: "#24443f", fg: "#d1d8df" },
  "SENSING & DATA ANALYSIS":   { bg: "#441c2f", fg: "#b8d9ed" },
  DOE:       { bg: "#141f2b", fg: "#ffffff" },
  AERODYNAMICS: { bg: "#1b3a4b", fg: "#b8d9ed" },

};

const FALLBACK_TAG_COLORS = [
  { bg: "#1e3a52", fg: "#b8d9ed" },
  { bg: "#2d3a47", fg: "#d1d8df" },
  { bg: "#3d4f5f", fg: "#d1d8df" },
];

function colorForTag(tag) {
  if (TAG_COLORS[tag]) return TAG_COLORS[tag];
  let hash = 0;
  for (let i = 0; i < tag.length; i++) hash = (hash * 31 + tag.charCodeAt(i)) >>> 0;
  return FALLBACK_TAG_COLORS[hash % FALLBACK_TAG_COLORS.length];
}
