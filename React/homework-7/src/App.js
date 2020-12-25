import React from 'react'
import CatalogList from "./components/catalog/CatalogList";
import Layout from "./components/Layout";

function App() {
  return (
   <div style={{margin:0,padding:0}}>
       <Layout/>
     <CatalogList/>
   </div>
  );
}

export default App;
