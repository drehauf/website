import InventoryData2 from "../../assets/data/Inventur190827/data2.csv";
import InventoryData3 from "../../assets/data/Inventur190827/data3.csv";
import InventoryData4 from "../../assets/data/Inventur190827/data4.csv";
import InventoryData5 from "../../assets/data/Inventur190827/data5.csv";
import InventoryData6 from "../../assets/data/Inventur190827/data6.csv";
import CSVParser from "../utils/CSVParser";

const Data = [
  InventoryData2,
  InventoryData3,
  InventoryData4,
  InventoryData5,
  InventoryData6
];

const InventoryData = () => {

  const fetchTables = (callback) => {
    Data.forEach(file => {
      CSVParser.get(file, table => {
        const newTableData = table.data.map(item => {
          item.quantity = 1
          item.isChecked = false
          return item;
        })
        table.data = newTableData;
        callback(table);
      });
    });
  };

  const equalLength = array => {
    return Data.length === array.length;
  }

  return {
    fetchTables: fetchTables,
    allDataLoaded: equalLength,
  };
}

export default InventoryData();