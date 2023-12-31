import List from "./List";
const Main = ({items,supprimer,onCheck}) => {
  return (
    
<>
  
{items.length?(

<List items={items}  onCheck={onCheck} supprimer={supprimer} />


):
(<p style={{marginTop:"20rem"}}>empty</p>)}

</>
  )
}
export default Main ;