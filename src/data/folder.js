export const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "public file 1",
          isFolder: false,
        },
        {
          name: "public file 2",
          isFolder: false,
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Pages",
              isFolder: false,
            }
          ]
        },
        {
          name: "app",
          isFolder: true,
          items: [
            {
              name: "store",
              isFolder: false,
            }
          ]
        }
      ]
    }
  ]
}