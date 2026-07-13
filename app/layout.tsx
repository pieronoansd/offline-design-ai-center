import "./globals.css"

export const metadata = {
  title:"OFFLINE DESIGN AI CENTER",
  description:"AI视觉生产中心"
}


export default function RootLayout({
children
}:{
children:React.ReactNode
}){

return(

<html lang="zh-CN">

<body>

{children}

</body>

</html>

)

}
