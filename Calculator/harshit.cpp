#include<iostream>
using namespace std;

float angle(int hour, float min)
{
    float mint = min/5;
    float mint_angle = mint * 2.5;
    // cout<<mint<<endl; 
    float add_min = mint;
    int add_hour = 24 - hour;
    float add = (add_min + add_hour);
    add *= 30;
    if(add > 360)
    {
        add -= 360;
    }

    add -= mint_angle;
    return add;
}

int main()
{
    int hour = 14;
    int minutes = 20; 
    cout<<angle(hour, minutes);
    return 0;

}