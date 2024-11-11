import java.sql.Connection;
import java.sql.DriverManager;

class jdbcf {

    public static void main(String[] args) {
        try{
    
        //load driver
        Class.forName("com.mysql.jdbc.Driver");
        //creation a connection 
        String url = "jdbc:mysql://localhost:3306/home";
        String user = "root";
        String pass = "1234";
        Connection con = DriverManager.getConnection(url,user,pass);
            if(con.isClosed()){
                System.out.println("connection closed");
            }else {
                System.out.println("connection is created");
            }
    
        }catch(Exception e){
    
            e.printStackTrace();
        }
    
    
    }

}