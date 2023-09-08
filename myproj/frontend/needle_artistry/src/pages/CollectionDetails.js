import { Outlet, useNavigation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import { useState,useEffect } from "react";

const BlouseData = [
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Blouse",
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Blouse",
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Blouse",
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Blouse",
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Blouse",
        text: "blabala"
    },
]
const LehengaData = [
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Lehenga",
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Lehenga",
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Lehenga",
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Lehenga",
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: "Lehenga",
        text: "blabala"
    },
]
const KurtaData = [
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Kurta',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Kurta',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Kurta',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Kurta',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Kurta',
        text: "blabala"
    },
]
const NightDressData = [
    {
        link: "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg",
        title: 'Night Dress',
        text: "blabala"
    },
    {
        link: "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg",
        title: 'Night Dress',
        text: "blabala"
    },
    {
        link: "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg",
        title: 'Night Dress',
        text: "blabala"
    },
    {
        link: "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg",
        title: 'Night Dress',
        text: "blabala"
    },
    {
        link: "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg",
        title: 'Night Dress',
        text: "blabala"
    },
]
const FrocksData = [
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Frock',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Frock',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Frock',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Frock',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Frock',
        text: "blabala"
    },
]
const SkirtData = [
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Skirt',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Skirt',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Skirt',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Skirt',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Skirt',
        text: "blabala"
    },
]
const SalwarData = [
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Salwar',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Salwar',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Salwar',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Salwar',
        text: "blabala"
    },
    {
        link: "https://www.hallaganfinefurniture.com/cmsb/uploads/banner-fabrics_002.png",
        title: 'Salwar',
        text: "blabala"
    },
]

function CollectionDetailsPage() {

   const {type}=useParams();
   let ans;
    if (type === 'Blouse')
        ans = 'blouses';
    if (type === 'Kurta')
        ans = 'kurtas';
    if(type==='Lehenga')
        ans = 'lehengas';
    if (type === 'Night Dress')
        ans = "nightdresses";

    if (type === 'Frocks')
        ans = "frocks";
    if (type === 'Skirt')
        ans = "skirts";
    if (type === 'Salwar')
        ans = "salwars";

    const [collectionType, setCollectionType] = useState([]);
    useEffect(() => {
        async function CollectionsFetch() {
            const response = await fetch('http://localhost:8000/api/'+ans);
            const images1 = await response.json();
            setCollectionType(images1);
        }
        CollectionsFetch();


    }, [])

    return (
        <>
        
            
            <Details data={collectionType} />
        </>
    );
}

export default CollectionDetailsPage;
