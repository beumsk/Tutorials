C#


// file > new project > web web app > basic + MVC


// useful starting lines; they are assemblies (libraries) that contain useful objects, methods, functions.
using System; // contain for example the Console object
using System.Collections.Generic; // contains the list 
using System.Linq;
using System.Text;
using System.Threading.Tasks;
// less usual assembly
using System.Speech.Synthesis; // synthesize strings and more
using Microsoft.VisualStudio.TestTools.UnitTesting; // testing assembly
using anyClass; // could be any crafted class (Grades ie)


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
grades.Add(17); // 17
grades.Add(15); // 17, 15
grades.Insert(2, 13); // 17, 15, 13
grades.Remove(13); // 17, 15
grades.Count; // 2
foreach (int grade in grades)
{
  Console.WriteLine(grade);
}


// object
static void writeResult(string description, int result) 
{
  Console.WriteLine(description + ": " + result);
  // OR
  Console.WriteLine("{0}: {1}", description, result); // c# string formatting; can add other strings and characters
  // OR
  Console.WriteLine($"{description}: {result}");
}
writeResult("My age", 24); // My age: 24


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


// Property
public string Name 
{
  get // computation or retrieve value and return it
  {
    return _name = value;
  }
  set // validations to protect your object
  {
    if(!String.IsNullOrEmpty(value))
    {
      _name = value;
    }
  }
}
private string _name; // field
book.Name = "Rem's"; // Rem's
book.Name = null; // Rem's; or nothing if nothing is passed before


// delegate (events)
public delegate void NameChangedDelegate(string old, string new);
public NameChangedDelegate NameChanged; // field
NameChanged(_name, value);
static void onNameChanged(string old, string new)
{
  Console.WriteLine($"Name changing from {old} to {new}");
}
book.NameChanged = new NameChangedDelegate(onNameChanged); // use


// public vs private vs internal


// Types
string name = "beumsk";
int = 3;
float = ;
double = ;
object = ;


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
prop -> creates property;
