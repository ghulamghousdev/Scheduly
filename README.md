# Scheduly

An automated Time-Table Generator.

## Contributors

- [Ghulam Ghous](https://github.com/ghulamghousdev)
- [Ahmad Zaheer](https://github.com/ahmadzaheer-dev)

## Table of Contents
- [README File](https://github.com/ghulamghousdev/Scheduly/blob/master/README.md)
- [Features](https://github.com/ghulamghousdev/Scheduly/blob/master/Documentation/features-and-constraints/FeaturesAndConstraints.md)
- [Pseudo Code](https://github.com/ghulamghousdev/Scheduly/blob/master/Documentation/pseudo-code/Pseudo.md)
- [Correctness Of Algorithm](https://github.com/ghulamghousdev/Scheduly/blob/master/Documentation/correctness-of-algorithm/correctness-of-algorithm.md)
- [Complexity Analysis](https://github.com/ghulamghousdev/Scheduly/blob/master/Documentation/complexity-analysis/Complexity%20Analysis.md)
- [User Manual](https://github.com/ghulamghousdev/Scheduly/blob/master/Documentation/user-manual/UserManual.md)
- [Project Report](https://github.com/ghulamghousdev/Scheduly/blob/master/Documentation/project-report/README.md)

## Concept

The goal of the software application is to provide a possible timetable solution with the
minimum number of clashes between slots. It relieves the user of much of the hard work
required for generating timetable manually, leaving him with more time to apply the
skills and judgment where they are needed in order to produce a timetable of the highest
quality.

## Scope of this Project

The software which we are designing can be used by any faculty to generate a timetable in
future. This algorithm will satisfy all the hard constraints which are mentioned below:

- A Teacher should have only one class at a time.
- A student should have only one class at a Time.
- There should be no free period between the lectures for a class of students.
- Each class has a fixed number of lectures in a day.

## Algorithmic Approach Used

The algorithmic approach which we are going to use in this project is **Heuristic Approach**.
All the hard constraints are dealt with by using **Constraint-based Programming**.

## Technologies Used

- SASS
- React
- Redux
- MongoDB
- Node.js
- Express.js

## Technologies and Tools used in Project with the respective versions

### IDE

| Sr. No. |     Technology     | Version |
| :------ | :----------------: | :-----: |
| 1.      | Visual Studio Code |  1.47   |

### Database and GUI for Database

| Sr. No. | Technology | Version |
| :------ | :--------: | :-----: |
| 1.      |  MongoDB   |   3.6   |
| 2.      |  Robo 3T   |   1.3   |

### Programming Language and NPM Packages

| Sr. No. |  Technology  | Version |
| :------ | :----------: | :-----: |
| 1.      |   React.js   | 16.13.1 |
| 2.      |   Node.js    | 12.6.0  |
| 3.      |  Node-SAAS   | 4.14.1  |
| 4.      |   Nodemon    |  2.0.4  |
| 5.      |  Express.js  |  4.17   |
| 6.      |   Mongoose   | 5.9.27  |
| 7.      |   bcryptjs   |  2.4.3  |
| 8.      | jsonwebtoken |  8.5.1  |

## Prerequisits

Following are the prerequisits to run this project locally on your machine. If you don't have these
prerequisits installed on your computer, run the following commands on your machine.

- **Git**
  You can install it from this [link.](https://git-scm.com/download/win)

- **Visual Studio Code**
  You can install it from the following source by clicking on this [link.](https://code.visualstudio.com/download)

- **MongoDB**
  There are two ways to install mongodb locally on your machine.

  1. By downloading the .msi file, you simply have to run it on your machine and install it
     on the following location on your

  ```
  path = c/Users/{You user name}/.
  ```

  [Click here to download.](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.0-signed.msi)

  2. By downloading the .zip file, you have to unzip the file in the location provided by the path

  ```
  path = /cUsers/{You user name}/.
  ```

  And create a mongodb_data folder in the same directory. [Click here to download it](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.0.zip)

- **Robo 3T:**
  It is a GUI for local mongodb database. You can download the community version and install it
  by [clicking here.](https://robomongo.org/download)

- **Node:**
  To download and install the node on your machine [click here.](https://nodejs.org/en/download/)

- **Node Package Manager:**
  You can install node package manager by running the following command on power shell.
  ```
  npm install npm@latest -g
  ```

## Guidelines for Project Configuration

**Step 1. Clone the repo:**
Open Git in the directory where you want to download it and run the following command.

```
git clone https://github.com/ghulamghousdev/CS311S20PID32.git
```

**Step 2. Open in Code Editor:**
To open folder in Visual Studio Code, right click on the folder and click on open with
Visual Studio Code.

**Step 3. Backend Dev Dependencies:**
To install all the development dependencies for backend, execute the following commands
the terminal.

```
cd backend
npm install
```

**Step 5. Run Database Server:**
You have to set the database path in your package.json file. You need to replace the
mongod script in scripts in package.json with the following line.

```
"mongod": "c:/Users/{account username}/mongodb/bin/mongod.exe --dbpath c:/Users/{account username}/mongodb-data"

For example if your account username is Ghous then the script will be like:
"mongod": "c:/Users/Ghous/mongodb/bin/mongod.exe --dbpath c:/Users/Ghous/mongodb-data"
```

After doing this you need to open a new terminal and execute the following command.

```
npm run mongod
```

**Step 5. Create Database:**
Open Robo 3T and create a connection with database. Set the name of connection to scheduly.

**Step 6. Install Frontend dev Dependencies:**
Open new terminal and execute the following command on terminal.

```
cd frontend
npm install
```

**Step 7. Run Backend Server:**
To run Backend Server, execute the following commands in order.

```
cd backend
npm start
```

**Step 8. Run Frontend Server:**
To run Frontend Server, execute the following commands in order.

```
cd frontend
npm start
```

**Step 9. Sign in:**
Once the servers are running, you first need to sign up as the database is empty at the start of the project.

**Wishing you best of luck for the Testing phase Cheers :)**

## Found an Issue or any suggestions

Create issues [here](https://github.com/ghulamghousdev/CS311S20PID32/issues/new).
