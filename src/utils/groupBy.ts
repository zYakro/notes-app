export const groupBy = (items: any[], byProperty: (item: any) => string): any => {
  const groupItems = {}

  items.forEach(item => {
    const property = byProperty(item);

    if(groupItems.hasOwnProperty(property)){
        return groupItems[property].push(item)
    }

    groupItems[property] = [item]
  })

  return groupItems;
}