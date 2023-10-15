import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

export const allUsers = () => {
  const GETUSERS = gql`
    {
      allUsers{
        id
        username
      }
    }
  `
  const { data,loading } = useQuery(GETUSERS);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      setList(data.allUsers)
    }
  }, [data])
  
  return list
}

export const allTradeInvoices =()=>{
  const GETALLTRADEINVOICES = gql`
    {
      allTradeInvoices{
        id
        name
        customer {
          id
          username
        }
        trade{
          id
          name
        }
        partner{
          id
          name
        }
        price
        totalCost
        baseCost
        units
        checkId
        startDate
        endDate
        type
        harvestType
        status
        startTime
        extraNotes
        profitRangeMin
        profitRangeMax
        prosMin
        prosMax
      }
    }
  `

  const { data,loading } = useQuery(GETALLTRADEINVOICES);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      const fData = data.allTradeInvoices.filter((el)=> el.status !== 'PENDING');
      setList(fData)
    }
  }, [data])
  
  return [loading,list]
}

export const allFarmInvoices =()=>{
  const GETALLFARMINVOICES = gql`
  {
    allFarmInvoices {
      id
      name
      customer {
        id
        username
      }
      farm {
        id
        name
      }
      partner {
        id
        name
      }
      price
      totalCost
      baseCost
      units
      checkId
      startDate
      endDate
      type
      harvestType
      status
      startTime
      extraNotes
      profitRangeMin
      profitRangeMax
      prosMin
      prosMax
    }
  }
  `

  const { data,loading } = useQuery(GETALLFARMINVOICES);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      const fData = data.allFarmInvoices.filter((el)=> el.status !== 'PENDING');
      setList(fData)
    }
  }, [data])
  
  return [loading,list]
}

export const allProduceInvoices =()=>{
  const GETALLPRODUCEINVOICES = gql`
  {
    allProduceInvoices {
      id
      name
      customer {
        id
        username
      }
      produce{
        id
        name
      }
      price
      totalCost
      baseCost
      units
      checkId
      status
      startTime
    }
  }
  `

  const { data,loading } = useQuery(GETALLPRODUCEINVOICES);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      setList(data.allProduceInvoices)
    }
  }, [data])
  
  return [loading,list]
}