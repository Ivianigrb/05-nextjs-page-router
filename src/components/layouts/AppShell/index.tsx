//file ini dibuat untuk meletakan komponen komponen yang outputnya akan di munulkan di semua halaman dan cara memanggilnya kita tambahkan tag nama folder ini ke halaman file app.tsx
import React from "react";
import Navbar from "../Navbar";

type AppShellProps ={
    children:React.ReactNode;
}
const AppShell = (props : AppShellProps) => {
    const{children} = props;
    return (
        <>
        <Navbar/>
        {children}
        </>
    );
};

export default AppShell;