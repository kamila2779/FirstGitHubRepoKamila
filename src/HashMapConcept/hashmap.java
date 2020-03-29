package HashMapConcept;

import java.util.HashMap;
import java.util.Map;

public class hashmap {

    public static void main (String[] args) {

        HashMap<Integer, String>  hm = new HashMap<Integer, String>();
        hm.put(1, "Selenium");
        hm.put(2, "Maven");
        hm.put(3, "Cucumber");
        hm.put(4, "TestNG");
        System.out.println(hm.get(1));
        System.out.println(hm.get(5));

        for (Map.Entry m : hm.entrySet()){
            System.out.println(m.getKey()+" "+m.getValue());
        }

        HashMap<Integer, Employee> emp = new HashMap<Integer, Employee>();
        Employee e1 = new Employee("Kamila", 40, "QA");
        Employee e2 = new Employee("Airat", 42, "QA");
        Employee e3 = new Employee("Malik", 5, "Kindergarden");
        Employee e4 = new Employee("Ailin", 3, "Preschool");

        emp.put(1, e1);
        emp.put(2, e2);
        emp.put(3, e3);
        emp.put(4, e4);

        for(Map.Entry<Integer, Employee> m : emp.entrySet()){
            int key = m.getKey();
            Employee e = m.getValue();

            System.out.println("Employee "+ key +" info");
            System.out.println(e.name +" "+e.age +" "+e.dept);
        }




    }
}
