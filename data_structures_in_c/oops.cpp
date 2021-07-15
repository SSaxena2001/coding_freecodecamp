#include <iostream>

using namespace std;

class Employee
{
public:
    string Name;
    string Company;
    int Age;

    void IntroduceYourself(){
        cout<<"Name - "<< Name << endl;
        cout<<"Company - "<< Company << endl;
        cout<<"Age - "<< Age << endl;
    }
};

int main()
{
    Employee employee1;
    employee1.Name = "ABC";
    employee1.Age = 28;
    employee1.Company="XYZ";
    employee1.IntroduceYourself();
}