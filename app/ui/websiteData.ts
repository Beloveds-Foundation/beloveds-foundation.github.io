
export type PageData ={
  
    title: string;
  path: string
}

const websiteData: {pages:PageData[], websiteTitle:string}= {
  pages: [
    {
      title: "Section 1",
      path:"./",
    },

    {
      title: "Section 2",
      path: 'portfolio',
    },

    {
      title: "Section 3",
      path:"contact"

    },
  ],

  websiteTitle: "Website Title",
};

export default websiteData;
