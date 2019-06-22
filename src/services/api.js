const userData = [
  {
    id: 'BB-1234567890',
    name: 'John Doe',
    items: ['Nivea Bodywash', 'WD 1TB HDD'],
    address: 'B-1234, Saket, New Delhi',
    pincode: '200012'
  },
  {
    id: 'FK-1233547890',
    name: 'Jane Doe',
    items: ['Nivea Sunscreen', 'Ponds Facewash'],
    address: 'J/10, Kormangala, Bangalore',
    pincode: '560034'
  },
  {
    id: 'MT-1234586890',
    name: 'Thomas Jacobs',
    items: ['Sony PS4 Slim', 'God of War PS4 Game', 'Spiderman PS4 Game'],
    address: 'M-123, Near SMS Hospital, Bani Park, Jaipur',
    pincode: '300014'
  },
  {
    id: 'JB-1234532890',
    name: 'Hellen Kattie',
    items: ["Levi's Tshirt"],
    address: '123/12, Near Ardee Mall, Andheri West, Mumbai',
    pincode: '100110'
  },
  {
    id: 'FK-1234097890',
    name: 'Ray James',
    items: ['PS4 Pro', 'WD 1TB HDD', 'SanDisk 32GB USB 3.0'],
    address: '1391, Sector 46, Gurgaon',
    pincode: '122003'
  },
  {
    id: 'FK-1224117890',
    name: 'Micky Santos',
    items: ['Nivea Bodywash', 'Ponds Cream'],
    address: 'J/10, Kormangala, Bangalore',
    pincode: '560034'
  },
  {
    id: 'MT-1234593890',
    name: 'Cattie Brooks',
    items: ['Sony PS4 Slim', 'God of War'],
    address: 'M-123, City Center, Noida',
    pincode: '221012'
  },
  {
    id: 'JB-1234567000',
    name: 'Matt Thomas',
    items: ["XBox One S", 'WD 1TB HDD'],
    address: '121/12, Near Apex Mall, Andheri West, Mumbai',
    pincode: '100110'
  }
];

/**
 * 
 * @param {String} searchTerm
 * 
 * Retruns a Promise, because in real-world you make an API request to get the data.
 *  
 */
export const getData = (searchTerm) => new Promise((resolve, reject) => {
  const result = []
  for(let i=0; i<userData.length; i++) {
    for(let key in userData[i]) {
      if(key === 'items') {
        for(let item=0; item<userData[i].items.length; item++) {
          let matchPosition = userData[i].items[item].search(searchTerm);
          if(matchPosition !== -1) {
            const match = { foundIn: key, item: userData[i].items[item], searchTerm };
            result.push({...userData[i], match});
            break;
          }  
        }
      }
      else {
        let matchPosition = userData[i][key].search(searchTerm);
        if(matchPosition !== -1) {
          const match = { foundIn: key, start: matchPosition, end: matchPosition + searchTerm.length };
          result.push({...userData[i], match});
          break;
        }
      }
    }
  }
  resolve(result);
});