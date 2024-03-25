<div align="left">
  <img src="https://raw.githubusercontent.com/SurajSomkuwar9/simple-study-planner/wip/output-onlinegiftools.gif" width="360">
</div>

---
<dl>
  <dd>
    <dl>
      <dd>

# Study Planner

Study Planner is a web application built with Next.js, Tailwind CSS, and TypeScript that allows users to view their study schedule based on the provided timetable data.



<br/>
<div align="center">
    <img src="https://skillicons.dev/icons?i=nextjs,tailwind,typescript,express,nodejs,firebase,mongodb" /><br>
</div>

<br/>


We used nextjs14 which provides server actions, which are asynchronous functions on the server side.
which can handle any sort of<br/>
-form submissions<br/>
-data mutations<br/>
-and other serverside operations<br/> 
directly within Nextjs applications, without the need of any separate API endpoint. 
It basically helps us in building interactive, and dynamic web applications with it and a streamlined way to perform server-side logic directly from your components.



## Features

- **Dynamic Date Selection**: Users can select a date using a date picker, and the application will display the study schedule for that date.
- **Flexible Schedule Display**: The application can handle different schedule formats and display the subjects for each time slot.
- **Easy Configuration**: Users can easily configure the study timetable by editing the JSON file containing the schedule data.

## Usage

To use the Study Planner application, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/study-planner.git
```

2. Install dependencies:

```bash
cd study-planner
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Configuration

To configure the study timetable, edit the `timetable.json` file located in the root directory of the project. The JSON file should follow the provided format:

```json
{
  "Date Range": {
    "Week Label": {
      "Time Slot": [
        {
          "Time": "Time Range",
          "Subjects": ["Subject 1", "Subject 2", "..."]
        }
      ]
    }
  }
}
```

## Contributing

Contributions are welcome! If you'd like to contribute to Study Planner, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---



 </dd>
    </dl>
  </dd>
</dl>
