
export type Link ={
  
    title: string;
   path: string
}


export type PageData ={
  
    title: string;
   path?: string
   subTitles?: Link[]
}

const websiteData: {pages:PageData[], websiteTitle:string}= {
  pages: [
    {
      title: "Home",
      path:"/",
    },

    {
      title: "About",
      subTitles:[{title: "Who We Are", path:"/about/who-we-are"}, {title: "Success Stories", path:"/about/success-stories"}]
    },

    {
      title: "Get Involved",
           subTitles:[{title: "Volunteer", path:"/get-involved/volunteer"}, {title: "Give Supplies", path:"/get-involved/give-supplies"},{title: "Donate", path:"/get-involved/donate"}]


    },
    {
      title: "Contact",
      path:"/contact"

    },
  ],

  websiteTitle: "Beloveds Foundation",
};

export default websiteData;
