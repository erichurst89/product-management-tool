# product-management-tool

INTRODUCTION

This project creates a simple product inventory management tool using ReactJS, Node.JS/Express, and MYSQL for the database.
It allows the user to create a product with the attributes of name, upc, and date that it is available, allows them
to add certain properties to said product such as brand, color, and it also has the ability to search the total inventory to see
what has been entered.

CONTENTS

It consists of two pages: a product creation page and a listing page. With the product creation page, the user will be able
to enter in products that are to be stored in their invention. The listing page will allow them to pull up an inventory
list where they can check the products that are in their inventory.

## **SET-UP AND DEPENDENCIES INSTALLATION**

1. Clone the repo onto your device. 
2. Run ``` npm install ``` for all necessary dependencies.
  Frontend dependencies: express, axios, cors, react-router-dom
  Backend dependencies: express, mysql, nodemon, cors
3. Run ``` npm start ``` in your client and server folder to open the project on localhost:3000

DATABASE DUMP

There is a folder that includes the database dump file needed to import the database schema to your own MySQL workbench. 
I also included a picture of the schema from mysql. ![alt text](C:\Users\ehurs\OneDrive\Pictures\Screenshots\schema for highlands project.png)