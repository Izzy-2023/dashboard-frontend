# Next.js Dashboard with Django API Integration

This repository contains a Next.js application integrated with a Django backend to display various types of charts on a dashboard. The dashboard includes Line, Bar, Pie, and Candlestick charts, with data fetched from a Django API.

## Setup and Running the Application

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Python](https://www.python.org/) (v3.8 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [pip](https://pip.pypa.io/en/stable/) (Python package installer)

### 1. Setting Up the Django Backend

1. Clone the Django backend repository (if it's in a separate repo):

    ```bash
    git clone <Django-backend-repo-url>
    ```

2. Navigate to the Django backend directory:

    ```bash
    cd <Django-backend-directory>
    ```

3. Create a virtual environment and activate it:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

4. Install the required Python packages:

    ```bash
    pip install -r requirements.txt
    ```

5. Apply database migrations:

    ```bash
    python manage.py migrate
    ```

6. Run the Django development server:

    ```bash
    python manage.py runserver
    ```

    The API will be available at `http://localhost:8000/`.

### 2. Setting Up the Next.js Frontend

1. Clone the Next.js repository:

    ```bash
    git clone <Next.js-repo-url>
    ```

2. Navigate to the Next.js frontend directory:

    ```bash
    cd <Next.js-directory>
    ```

3. Install the required Node.js packages:

    ```bash
    npm install
    ```

4. Start the Next.js development server:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000/`.

## Libraries and Tools Used

- **Next.js**: A React framework for server-rendered or statically-exported React applications.
- **React**: A JavaScript library for building user interfaces.
- **Chart.js**: A flexible JavaScript charting library.
- **chartjs-chart-financial**: An extension for Chart.js to create financial charts, including Candlestick charts.
- **Django**: A high-level Python web framework for building APIs.
- **Django REST Framework**: A toolkit for building Web APIs in Django.

## Approach and Thought Process

### Project Overview

The goal of this project is to create a dynamic dashboard application using Next.js for the frontend and Django for the backend. The application features various types of charts (Line, Bar, Pie, and Candlestick) that display data fetched from the Django API. The main focus is on building a responsive and interactive dashboard that visualizes data effectively.

### Approach

#### 1. **Defining Requirements**

The first step was to define the requirements for the dashboard:
- Display different types of charts (Line, Bar, Pie, Candlestick).
- Fetch data from a backend API and visualize it on the frontend.
- Ensure the application is responsive and performs well.

#### 2. **Backend Development with Django**

1. **Setup Django Project**:
   - Initialize a new Django project and create a new app for handling the API endpoints.
   - Configure the database and create models if necessary.

2. **Create API Endpoints**:
   - Define API views to handle requests for chart data.
   - Implement serializers to format the data as JSON.
   - Map the API views to URLs in Django’s `urls.py`.

3. **Data Handling**:
   - Ensure that the data provided by the API endpoints is in a format compatible with the frontend requirements.
   - Include endpoints for different types of charts (Line, Bar, Pie, Candlestick) to provide a comprehensive dataset for visualization.

#### 3. **Frontend Development with Next.js**

1. **Setup Next.js Project**:
   - Initialize a new Next.js project and configure necessary dependencies.

2. **Fetch Data from Django API**:
   - Use the `fetch` API within React’s `useEffect` hooks to retrieve data from Django’s API endpoints.
   - Process the data to fit the format required by the charting library.

3. **Integrate Chart.js**:
   - Install Chart.js and its required plugins for creating various charts.
   - Register the necessary components and controllers for different chart types, including the Candlestick chart.

4. **Render Charts**:
   - Use the `react-chartjs-2` library to integrate Chart.js with React components.
   - Pass the fetched data as props to the chart components for rendering.

5. **Handle Client-Side Logic**:
   - Use React hooks (`useState`, `useEffect`) to manage component state and lifecycle.
   - Ensure that charts are updated dynamically as data changes.

6. **Error Handling and Debugging**:
   - Implement error handling for data fetching and chart rendering.
   - Debug and resolve issues related to data mismatch, chart configuration, and library integrations.

### Thought Process

1. **Separation of Concerns**:
   - By separating the backend (Django) and frontend (Next.js) responsibilities, the project maintains a clear division of concerns. Django handles data management and API services, while Next.js focuses on presenting data and user interactions.

2. **Modular Design**:
   - The project is designed in a modular fashion, with distinct components for each type of chart and separate functions for data fetching and processing. This modularity enhances code maintainability and reusability.

3. **Data-Driven Approach**:
   - The frontend is designed to be highly data-driven. By fetching data from the backend and passing it to chart components, the application dynamically updates based on real-time data changes.

4. **User Experience**:
   - Emphasis is placed on creating a responsive and interactive user experience. The charts are designed to be visually appealing and functional, with options for customization and responsive design.

5. **Integration Challenges**:
   - Integrating Next.js with Django involved addressing challenges related to library compatibility and data synchronization. Specific care was taken to ensure that Chart.js and its plugins were compatible with the Next.js environment.

6. **Error Management**:
   - Comprehensive error management strategies were employed to handle issues during data fetching and chart rendering. This includes using try-catch blocks and logging errors for debugging.




