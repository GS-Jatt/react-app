import IndeterminateCheckbox from "./DepartmentCheckBox";



export default function Component2() {
    const data = [
      {
        department: "customer_service",
        sub_departments: [
          "support",
          "customer_success"
        ]
      },
      {
        department: "design",
        sub_departments: [
          "graphic_design",
          "product_design",
          "web_design"
        ]
      }
    ];
  
  
    return data.map((data)=><IndeterminateCheckbox data={data}/>)
  }


  