"use client";
import Script from "next/script"
export default function page (){
    return (
        <div>
<script>
    src="./location"
    onLoad={()=>{
        console.log("file uploaded")
    }}
</script>
<h1>get user  locations</h1>
        </div>
    )
}