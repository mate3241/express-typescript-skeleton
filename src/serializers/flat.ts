import { Flat } from '../models/flat';
 export interface FlatSerializer {
  
   title: string,
   price: number,
   floorArea: number,
   address: string,
   country: string,
   zip: number,
   city: string,
   street: string
 }

 export const show = (flat: Flat): FlatSerializer => {
   return {
    
   }
 }