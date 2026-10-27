// Source: https://www.epcor.com/ca/en/ab/edmonton/operations/service-connections/guides-checklists-forms.html
// Last synced: 2026-10-27. Update this file when EPCOR publishes new versions.
const PDF = "https://www.epcor.com/content/dam/epcor/documents/supporting-documents/";
const WEB = "https://www.epcor.com";
const p = (file) => PDF + file;
const w = (path) => WEB + path;
const EDM = "/ca/en/ab/edmonton/";

window.STANDARDS = [
  { title: "Customer Connection Guide", utility: "Water & Drainage", group: "General", type: "PDF", status: "Current", url: p("water-drainage_customer-connection-guide.pdf") },
  { title: "Hydraulic Network Analysis Process Overview", utility: "Water & Drainage", group: "General", type: "PDF", status: "Current", url: p("hydraulic-network-analysis-process-overview.pdf") },
  { title: "Design Guidelines – Sanitary Flow Generation for Neighborhood Design Report, Water Consumption and Fire Flow for Hydraulic Network Analysis", utility: "Water & Drainage", group: "General", type: "PDF", status: "Current", url: p("2024-11_design-guidelines.pdf") },
  { title: "Erosion and Sedimentation Field Manual", utility: "Water & Drainage", group: "General", type: "PDF", status: "Current", url: p("erosion-and-sedimentation-control_field-manual.pdf") },
  { title: "Drainage Service Guidelines", utility: "Water & Drainage", group: "General", type: "Web page", status: "Current", url: w(EDM + "operations/water-wastewater/wastewater-collection/drainage-service-guidelines.html") },
  { title: "Wastewater Integrated Resource Plan: 2023 Summary Report", utility: "Water & Drainage", group: "General", type: "PDF", status: "Current", url: p("wastewater-integrated-resource-plan-summary-report.pdf") },

  { title: "Volume 3-01: Development Planning Procedure and Framework", utility: "Water & Drainage", group: "Volume 3 – Drainage", type: "PDF", status: "Current", url: p("volume-3-01-development-planning-procedure-and-framework.pdf") },
  { title: "Volume 3-02: Stormwater Management and Design Manual", utility: "Water & Drainage", group: "Volume 3 – Drainage", type: "PDF", status: "Current", url: p("volume-3-02-stormwater-management-and-design-manual.pdf") },
  { title: "Volume 3-03: Design Guidelines", utility: "Water & Drainage", group: "Volume 3 – Drainage", type: "PDF", status: "Current", url: p("volume-3-03-design-guidelines%E2%80%8B%E2%80%8B.pdf") },
  { title: "Volume 3-04: Pump Station and Forcemain Design Guidelines", utility: "Water & Drainage", group: "Volume 3 – Drainage", type: "PDF", status: "Current", url: p("volume-3-04-pump-station-and-forcemain-design-guidelines.pdf") },
  { title: "Volume 3-05: Drawing Requirements, Approvals, and Asset Acceptance/Transfer", utility: "Water & Drainage", group: "Volume 3 – Drainage", type: "PDF", status: "Current", url: p("volume-3-05-drawing-requirements-approvals-and-asset-acceptance-transfer.pdf") },
  { title: "Volume 3-06: Construction Specifications and Standard Drawings", utility: "Water & Drainage", group: "Volume 3 – Drainage", type: "PDF", status: "Current", url: p("volume-3-06-construction-specifications-and-standard-drawings.pdf") },
  { title: "Volume 3 Approved Product List (effective June 2026)", utility: "Water & Drainage", group: "Volume 3 – Drainage", type: "PDF", status: "Current", url: p("drainage-approved-product-list.pdf") },
  { title: "Archived Volume 3: Drainage Design Standards (Consolidated)", utility: "Water & Drainage", group: "Volume 3 – Drainage", type: "PDF", status: "Archived", url: p("2021-drainage-design-standards-volume-3.pdf") },

  { title: "Volume 4 – Water: 2024", utility: "Water & Drainage", group: "Volume 4 – Water", type: "PDF", status: "Current", url: p("2024_water_design-standards_volume-4.pdf") },
  { title: "Volume 4 – Water: 2021", utility: "Water & Drainage", group: "Volume 4 – Water", type: "PDF", status: "Archived", url: p("2021_water_design-standards_volume-4.pdf") },
  { title: "Volume 4 Approved Product List (effective June 2026)", utility: "Water & Drainage", group: "Volume 4 – Water", type: "PDF", status: "Current", url: p("water_approved-product-list_volume-4.pdf") },
  { title: "Flushing and Testing Guidelines", utility: "Water & Drainage", group: "Volume 4 – Water", type: "PDF", status: "Current", url: p("2024-02-27_water_flushing-and-testing-guidelines.pdf") },
  { title: "Water Service Guidelines", utility: "Water & Drainage", group: "Volume 4 – Water", type: "PDF", status: "Current", url: p("2023-05_water_service-guidelines.pdf") },
  { title: "Water Use Trends and Design Guidelines", utility: "Water & Drainage", group: "Volume 4 – Water", type: "PDF", status: "Current", url: p("2021-06_water-use_discussion-paper.pdf") },
  { title: "Cross Connection Control", utility: "Water & Drainage", group: "Volume 4 – Water", type: "Web page", status: "Current", url: w(EDM + "safety/work/cross-connection-control.html") },
  { title: "Infill Fire Protection Program", utility: "Water & Drainage", group: "Volume 4 – Water", type: "Web page", status: "Current", url: w(EDM + "operations/service-connections/guides-checklists-forms/fire-protection-cost-share.html") },
  { title: "Water Main Cost Sharing Program", utility: "Water & Drainage", group: "Volume 4 – Water", type: "Web page", status: "Current", url: w(EDM + "operations/service-connections/guides-checklists-forms/water-main-cost-share.html") },
  { title: "Water Meter Installations for Home Builders", utility: "Water & Drainage", group: "Volume 4 – Water", type: "Web page", status: "Current", url: w(EDM + "operations/service-connections/guides-checklists-forms/water-meter-installations.html") },

  { title: "Power Customer Connection Guide (updated May 2026, effective August 6, 2025)", utility: "Power", group: "General", type: "PDF", status: "Current", url: p("power_customer-connection-guide.pdf") },
  { title: "Volume 7 – 2026 Power (Greenfield Development)", utility: "Power", group: "Volume 7 – Power", type: "PDF", status: "Current", url: p("2026-power-design-standards-volume-7.pdf") },
  { title: "Volume 7 – 2024 Power (Greenfield Development)", utility: "Power", group: "Volume 7 – Power", type: "PDF", status: "Obsolete", url: p("2024_power_design-standards_volume-7.pdf") },
  { title: "Technical Requirements for Interconnection and Interoperability of Distributed Energy Resources on EPCOR's Electric Distribution System", utility: "Power", group: "General", type: "PDF", status: "Current", url: p("2022_power_technical-requirements_interconnection-guide.pdf") },
  { title: "Power service for multi-unit dwellings", utility: "Power", group: "General", type: "Web page", status: "Current", url: w(EDM + "operations/service-connections/guides-checklists-forms/multi-unit-dwellings.html") },
  { title: "Becoming a micro-generator (solar panels)", utility: "Power", group: "General", type: "Web page", status: "Current", url: w("/ca/en/ab/edmonton/conservation/generate-electricity/become-a-micro-generator.html") },
];
