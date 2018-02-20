C#


// file > new project > web web app > basic + MVC


// useful starting lines
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


// Hello world
namespace Hello 
{
  class Program 
  {
    static void Main(string[] args) 
    {
      Console.WriteLine("Hello, World!");
    }
  }
}


string name = "Rémy";
int number = 10;


// Hello world with prompt
namespace Hello 
{
  class Program
  {
    static void Main(string[] args) 
    {
      Console.WriteLine("Your name?");
      string name = Console.ReadLine();
      Console.WriteLine("Hello " + name);
    }
  }
}


// conditions
namespace Sleep
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("How many hours did you sleep?");
      Int hours = Console.ReadLine();
      if(hours >= 8)
      {
        Console.WriteLine("You slept enough");
      }
      else
      {
        Console.WriteLine("You need more sleep");
      }
    }
  }
}


// list
List<int> grades = new List<int>();
grades.Add(17);
grades.Add(15);
grades.Insert(2, 13);
grades.Remove(13);
grades.Count;
foreach (int grade in grades)
{
  Console.WriteLine(grade);
}


// constructor; instiancates an instance of that class, creates an object
GradeBook book = new GradeBook(); // default constructor
public GradeBook() // custom constructor
{
  // initialization code
}


// classes
class Something 
{
  public Something() 
  {
    // init
  }
  // rest of code
}
Something smth = new Something(); // creation of an object


// public vs private vs internal


// Types


// Assemblies


// Math
Math.Max(10, 11); // 11
Math.Min(10, 11); // 10


// 









// TESTING

// new project > test unit > for testing apps
// to test, the class should be public and the assembly should be added as reference


namespace Grades.Tests
{
  [TestClass] // attributes should be specified
  public class UnitTest1
  {
    [testMethod]
    public void TestMethod1()
    {
      Assert.AreEqual(3, 4): // test failed !
      Assert.AreNotEqual(3, 4); // test passed !
      Assert.AreEqual((83+10)/2, 46.5); // test failed !
      Assert.AreEqual((83+10)/2f, 46.5); // test passed !      
    }
  }
}








// SHORTCUTS in VS 

// use double tab to use those
cw -> Console.WriteLine();
ctor -> creates constructor;
testm -> creates testMethod;
