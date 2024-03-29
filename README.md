# Product Management Tool

## **INTRODUCTION**

This project creates a simple product inventory management tool using ReactJS, Node.JS/Express, and MYSQL for the database.
It allows the user to create a product with the attributes of name, upc, and date that it is available, allows them
to add certain properties to said product such as brand and/or color, and it also has the ability to search the inventory to see
what has been entered.

## **CONTENTS**

It consists of two pages: a _product creation page_ and a _listing page_. With the product creation page, the user will be able
to enter in products that are to be stored in their inventory. The listing page will allow them to pull up an inventory
list where they can check the products that are in their inventory.

## **SET-UP AND DEPENDENCIES INSTALLATION**

1. Clone the repo onto your device.
2. Use the `cd client` terminal command to enter the client folder and run `npm install` for all necessary dependencies.

- Frontend dependencies: express, axios, cors, react-router-dom.

3. Use the `cd server` terminal command to enter the server folder and run `npm install` for all necessary depencies.

- Backend dependencies: express, mysql, nodemon, cors

4. Run `npm start` in your client and server folder to run the application.

## **EXAMPLES OF APP USAGE**

Here are some screenshots of the web app working. This screenshot shows the product create page.

![alt text](<example of product create page-1.png>)

This screenshot shows the listing page with some products I created, showing them retrieved from the database.

![alt text](<example of listing page.png>)

## **DATABASE DUMP**

There is a folder that includes the database dump file needed to import the database schema to your own MySQL workbench.
I also included a picture of the schema from mysql.

![alt text](<schema for product-management-tool.png>)
