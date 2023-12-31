import './index.css';
import Header from'./header';
import Main from './main';
import Footer from './Footer'
import { useState,useEffect } from 'react';
import AddItem from './AddItem';
import Search from './Search';
import apiRequest from './apiRequest';
function App() {
  const DATA_URL="http://localhost:3500/items";

  
  const[items,setItems]=useState([])
  const[isLoading,setIsLoading]=useState(true)


useEffect(()=>{
const fetchItem=async()=>{
  try{
const Fdata=await fetch(DATA_URL);
if(!Fdata.ok) throw Error("cant load data")
const data= await Fdata.json();
setItems(data);
setfetchErr(null)
}catch(e){
setfetchErr(e.message)} 
finally{setIsLoading(false)}
}
setTimeout(() => {
  (async ()=>await fetchItem())()
}, 1500);

}, [])

const[fetchErr,setfetchErr]=useState()



   const setListItems=(newListItems)=>{
    setItems(newListItems)

   }
   
   const [addItem,setAddItem]=useState("");
   
   const onCheck=async (id)=>{
     const newListItems=items.map((item)=>{
       if(item.id===id){
         return {...item,checked:!item.checked}
       }
       else{
         return item
       }
      
     
     })
      setListItems(newListItems);



      const myItem=items.filter((item)=>(item.id===id));
      
    const updateRequest={
      method:'PATCH',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({checked:!(myItem[0].checked)})  
    }
    const U_DATA_URL=`${DATA_URL}/${id}`;
    const err= await apiRequest(U_DATA_URL,updateRequest)
    if(err) setfetchErr(err); 

    } 
   
   
   const supprimer=async (id)=>{
     const newListItems=items.filter((item)=>(item.id!==id))
     setListItems(newListItems)


const deleteRequest={
  method:'DELETE',
}
const U_DATA_URL=`${DATA_URL}/${id}`;
const err= await apiRequest(U_DATA_URL,deleteRequest)
if(err) setfetchErr(err); 


   }


  const addnewItem=async (item)=>{
    const id=items.length?items.length+1:1;
    const newitem={
      id,
    checked:false ,
    item
}
    const newListItems=[...items,newitem]
    setListItems(newListItems)



    const postRequest={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(newitem)
      
    }
    const Err=await apiRequest(DATA_URL,postRequest);
    if(Err) setfetchErr(Err);
}

const handleSubmit=(e)=>{
  e.preventDefault()
  if (!addItem) return;
  addnewItem(addItem);
  setAddItem('');
}
const [search,setSearch]=useState('')

  return (
     <div className='App'>  
  <Header title='Grocery List' />
  <AddItem addItem={addItem} setAddItem={setAddItem} handleSubmit={handleSubmit}/>
  <Search setSearch={setSearch} search={search} />
 <main> {isLoading && <p>loadiiing</p>}
  {fetchErr && <p style={{color:'red'}}>{`err:${fetchErr}`}</p>}
  {!isLoading && !fetchErr &&
  <Main items={items.filter((item)=>((item.item).toLowerCase().includes(search.toLocaleLowerCase())))}  onCheck={onCheck} supprimer={supprimer} fetchErr={fetchErr} isLoading={isLoading}/>}</main>
  <Footer length={items.length}/>
 
  </div> 

  );
}

export default App;
