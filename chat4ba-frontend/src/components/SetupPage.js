import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate to programmatically navigate
import './SetupPage.css';  // Import the CSS file for custom styles

const SetupPage = () => {
    const navigate = useNavigate();

    // Navigate to MySQL setup page
    const handleMySQLClick = () => {
        navigate("/mysql-setup");  // This will take you to the MySQL setup page
    };

    return (
        <div className="setup-page">
            <h1 className="setup-title">Setup your project</h1>

            {/* Start with a sample dataset */}
            <section className="setup-section">
                <h2>Start with a sample dataset</h2>
                <p>At CHAT4BA, we offer sample datasets for a quick hands-on experience. Choose one to quickly start gaining insights by asking questions.</p>
                <button className="sample-dataset-button">
                    <img className="logo" src="https://img.icons8.com/ios/452/shopping-cart.png" alt="E-commerce" />
                    E-commerce
                </button>
            </section>

            {/* Start with a data boilerplate */}
            <section className="setup-section">
                <h2>Start with a data boilerplate</h2>
                <p>At CHAT4BA, we offer boilerplates with clearly defined semantics. Choose one to quickly start gaining insights by asking questions.</p>
                <div className="data-boilerplate-buttons">
                    <button className="boilerplate-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/hubspot.png" alt="HubSpot" />
                        HubSpot
                    </button>
                    <button className="boilerplate-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/google-analytics-4.png" alt="Google Analytics 4" />
                        Google Analytics 4
                    </button>
                    <button className="boilerplate-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/woocommerce.png" alt="WooCommerce" />
                        WooCommerce <span className="beta">Beta</span>
                    </button>
                    <button className="boilerplate-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/stripe.png" alt="Stripe" />
                        Stripe <span className="beta">Beta</span>
                    </button>
                </div>
            </section>

            {/* Connect an external data source */}
            <section className="setup-section">
                <h2>Connect an external data source</h2>
                <p>Contact Us to suggest new data sources.</p>
                <div className="data-source-buttons">
                    <button className="data-source-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/google-bigquery.png" alt="BigQuery" />
                        BigQuery
                    </button>
                    <button className="data-source-button" onClick={handleMySQLClick}>
                        <img className="logo" src="https://img.icons8.com/ios/452/mysql-logo.png" alt="MySQL Server" />
                        MySQL Server
                    </button>
                    <button className="data-source-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/postgresql.png" alt="PostgreSQL" />
                        PostgreSQL
                    </button>
                    <button className="data-source-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/sql-server.png" alt="SQL Server" />
                        SQL Server
                    </button>
                    <button className="data-source-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/snowflake.png" alt="Snowflake" />
                        Snowflake
                    </button>
                    <button className="data-source-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/triangle.png" alt="Trino" />
                        Trino
                    </button>
                    <button className="data-source-button">
                        <img className="logo" src="https://img.icons8.com/ios/452/clickhouse.png" alt="ClickHouse" />
                        ClickHouse
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SetupPage;
