const apiRequest=async (url,objet,err=null)=>{
    try {
        const fData=await fetch(url,objet);
        if (!fData.ok) throw Error("error");
    } catch (error) {
        err=error.message;
        
    }finally{
return err;
    }




}
export default apiRequest;