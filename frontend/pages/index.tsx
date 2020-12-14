import React from 'react';
import 'tailwindcss/tailwind.css';
import { GlobalProvider } from '../contexts/GlobalState'
import Layout from '../Components/Layouts';
import Form from '../Components/Form'
import Table from '../Components/Table'

const Index: React.FunctionComponent = () => (
  <Layout title="Home">
    <GlobalProvider>
    <div className="page">
    <div className="w-full table-cell ... ">
              <h2 className="text-gray-800 font-normal text-4xl text-shadow">Current Mortgage Rates Ontario</h2>
              <p className= "text-gray-800 text-lg ">Find the most up to date mortgage rates tailored to your needs. Just adjust the values below.</p>
            </div>
      <div className="table w-full ...">
          <div className=" flex flex-col lg:flex-row border-t mt-8">
            <div className="table-cell ... flex flex-col lg:w-1/4 w-full pr-4 lg:border-r">
              <Form />
            </div>
            <div className="table-cell ... flex flex-col lg:w-3/4 w-full mt-4 lg:mt-0">
              <Table />
            </div>
          </div>
      </div>
      </div>
      </GlobalProvider>
  </Layout>
);
export default Index;
