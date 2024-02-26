import { useEffect, useState } from 'react'


import { Timestamp, addDoc, collection, deleteDoc, onSnapshot, orderBy, query, setDoc, doc, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import MyContext from './mycontext';
import { fireDB } from '../../firebase/FirebaseConfig';


function MyState(props) {
  const [mode, setMode] = useState('light');  
  const [loading, setLoading] = useState(false); 

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      setTimeout(()=>{
        window.location.href = '/dashboard'
        },800)
      getProductData()
      
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([]);

  // ****** get product
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData();
  }, []);


  // update and delete functions

  const editHandle = (item) => {
    setProducts(item)
  }

  //update product
  const updateProduct = async () =>{
    setLoading(true)
    try{
      await setDoc(doc(fireDB, 'products', products.id),products) ;
      toast.success('Product Updated successfully')
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData();
      setLoading(false)
      
    } catch (error) {
      console.log('error');
    }
   
  }


  //delete product
  const deleteProduct = async(item) => {
    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, 'products', item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error){
      console.log(error);
      setLoading(false)
    }
  }

  // Order section

  const[order, setOrder] = useState([]);

  const getOrders = async() => {
    setLoading(true)
    try {
      const response = await getDocs(collection(fireDB, "orders"))
    const ordersArray = []
    response.forEach((doc) => {
      ordersArray.push(doc.data())
      setLoading(false)
    });
    setOrder(ordersArray);
   // console.log(ordersArray);
   setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  //user information for order

  const[user, setUser] = useState([])

  const getUserData = async() => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, 'users'))
      const userArray = [];
      result.forEach((doc) => {
        userArray.push(doc.data());
        setLoading(false)
      });
      setUser(userArray);
      //console.log(userArray);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  useEffect(() => {
    getProductData()
    getOrders()
    getUserData();
  },[])

  // filter states 

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  return (
    <MyContext.Provider value={{ 
      mode, toggleMode, loading,setLoading,
      products, setProducts,addProduct,product, editHandle, deleteProduct, updateProduct, order ,user,
      searchkey, setSearchkey,filterType, setFilterType,
      filterPrice, setFilterPrice }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState