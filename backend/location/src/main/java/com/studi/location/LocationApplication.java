package com.studi.location;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@SpringBootApplication
public class LocationApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(LocationApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Class.forName("org.postgresql.Driver");
		Connection conn = DriverManager.getConnection("jdbc:postgresql://postgresql-coleene.alwaysdata.net:5432/coleene_studieval", "coleene", "DataBase2023");
		System.out.println(conn);

		String query = "SELECT * FROM Inventory i JOIN Property p ON i.property = p.id";

		ResultSet results;

		try {
			Statement stmt = conn.createStatement();

			results = stmt.executeQuery(query);
			while(results.next()){
				System.out.println(results.getString("status")); }
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

}
