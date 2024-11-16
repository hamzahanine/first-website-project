export enum SelectedPage{
    Home = "home",
    About = "about",
    ShopOnline = "shoponline",
    ContactUs = "contactus"
  }

export interface AboutType{
icon:JSX.Element;
title: string;
description: string;

}

export interface ShopType{
 id: string, 
 name: string;
 description?: string;
 image: string;
 category: string;

}