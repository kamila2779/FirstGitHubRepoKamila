package com.home.Kamila.ArrayList;

import java.util.ArrayList;
import java.util.Iterator;

public class Main {

    public static void main(String[] args) {
        ArrayList ar = new ArrayList();
        ar.add(10);
        ar.add(20);
        ar.add(30);
        System.out.println("ArrayList size = "+ar.size());

        ar.add(40);
        ar.add(50);
        ar.add("String");
        ar.add(true);
        ar.add('a');
        System.out.println("ArrayList size = "+ar.size());

        for(int i=0; i<=ar.size(); i++){
            System.out.println(ar.get(i));
        }
        

        Employee e1 = new Employee("Kamila", 40, "home");
        Employee e2 = new Employee("Airat", 42, "MC");
        Employee e3 = new Employee("Malik", 5, "kindergarden");
        Employee e4 = new Employee("Ailin", 3, "preschool");

        ArrayList ar1 = new ArrayList();
        ar1.add(e1);
        ar1.add(e2);
        ar1.add(e3);
        ar1.add(e4);

        Iterator<Employee> it = ar1.iterator();
        while (it.hasNext()){
            Employee emp = it.next();
            System.out.println(emp.name);
            System.out.println(emp.age);
            System.out.println(emp.dept);


        }







    }
}
