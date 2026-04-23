// C# - Object Oriented Programming language - by Beumsk


// file > new project > web web app > basic + MVC (old VS)


// .NET CLI 
dotnet new console -o ./CsharpProjects/TestProject // create new project
dotnet build // build project
dotnet run // run built project


// useful starting lines; they are assemblies (libraries) that contain useful objects, methods, functions.
using System; // contain for example the Console object
using System.Collections.Generic; // contains the list 
using System.Linq;
using System.Text;
using System.Threading.Tasks;
// less usual assembly
using System.IO; // File methods like creating, writing, saving 
using System.Speech.Synthesis; // synthesize strings and more
using Microsoft.VisualStudio.TestTools.UnitTesting; // testing assembly
using anyClass; // could be any crafted class (Grades ie)


// Hello world
namespace Hello
{
  class Program
  {
    static void Main(string[] args) // Main method is MANDATORY for the code to work and must be STATIC
    {
      Console.WriteLine("Hello, World!"); // includes a new line at the end of string
      Console.Write("Hello, World!"); // does not include new line at the end of string
    }
  }
}


// Hello world with prompt
namespace Hello
{
  class Program
  {
    static void Main(string[] args) // void is used when there is no return in a method
    {
      Console.WriteLine("Your name?");
      string name = Console.ReadLine();
      Console.WriteLine("Hello " + name);
    }
  }
}


// use parameters from command line
namespace Hello
{
  class Program
  {
    static void Main(string[] args) // you can populate parameters through properties > debug; parameters are delimited with spaces; that can be tricked with ""
    {
      foreach (string parameters in args) 
      {
        Console.WriteLine(parameters);
      }
    }
  }
}


// Types
var anyType; // var force the compiler to find the right type for us; should be avoided for clarity; no initialisation gives an error
byte number; // integer 0 to 255
short number; // integer -32768 to 32767
int number; // integer -2147483648 to 2147483647
byte number; // integer -9223372036854775808 to 9223372036854775807
float number; // simple precision ~6-9 digits
double number; // double precision ~15-17 digits
decimal number; // for financial values with lots of decimals 28-29 digits
char letter; // single character 'a'
string name; // character string "aaa"
bool diff; // true or false
type[] arr; // array of any type (ex int); reference type
List<type> list; // list of any type (ex int)
DayOfWeek day; // day of week enum


// Variable initialization implicit
var example = 'a'; // implicitly char
var example = "aaa"; // implicitly string
var example = true; // implicitly boolean
var example = 123; // implicitly int
var example = 1.23F; // implicitly float
var example = 1.23; // implicitly double
var example = 1.23456789m; // implicitly decimal


// Variable initialization explicit
char example = 'a'; // char
string example = "aaa"; // string
bool example = true; // boolean
int example = 123; // int
float example = 1.23F; // float
double example = 1.23; // double
decimal example = 1.23456789m; // decimal


// String character escape
Console.WriteLine("Hello\nWorld!"); // new line
Console.WriteLine("Hello\tWorld!"); // tab
Console.WriteLine("Hello \"World\"!"); // inside quotes
Console.WriteLine("c:\\source\\repos"); // back slash
Console.WriteLine(@" c:\source\repos =>   OK"); // verbatim string literal; can't use double quotes


// String concatanation and interpolation
string greeting = "Hello";
Console.WriteLine("Hello" + " " + "World!");
Console.WriteLine(greeting + " " + "World!");
Console.WriteLine($"{greeting} World!");
string projectName = "First-Project";
Console.WriteLine($@"C:\Output\{projectName}\Data"); // verbatim literal + string interpolation


// Type casting
short s = 200; int i = s; // 200 becomes of int type
int i = 200; short s = i; // NOT possible; short could be too specific for the number
int i = 200; short s = (short)i; // possible because we cast 'explicitly'
int i = 40000; short s = (short)i; // NOT possible even with cast 'explicitly'
int i = 20; double d = i; // 20 becomes of double type
int age = 24; string ageStr = Convert.ToString(age); // converts int to string "24"
string ageStr = "24"; int age = int.Parse(ageStr); // converts string to int 24
int.TryParse(ageStr, out age); // checks if parse is authorized and stores value in out int; will return true here
int quotient = 7 / 5; // gives 1 because values are of type int
decimal decimalQuotient = 7.0m / 5; // gives 1.4 because at least one value is decimal
decimal quotient = (decimal)7 / (decimal)5; // gives 1.4 thanks to type casting


// Increment
int value = 1;
value = value + 1; // 2
value += 1; // 3
value++; // 4 


// Boxing
int i = 5;
object o = i;
o = 6; // i = 5; o = 6


// Unboxing
int i =5;
object o = i;
o = 6;
int j = (int)o;
j = 7; // i = 5; o = 6; j = 7


// Console methods
Console.WriteLine("Hello"); // writes the string
string input = Console.ReadLine(); // ask user to type a line; needs to be stored
Console.ReadKey(true); // ask user to type on a key to continue; true prevents the write the key typed on
ConsoleKeyInfo typed = Console.ReadKey(true).key; // contains the key
Console.ForegroundColor = ConsoleColor.Black; // color of the text
Console.BackgroundColor = ConsoleColor.White; // color of background
Console.ResetColor(); // reset back and fore colors
Console.Clear(); // clear the screen
Console.SetCursorPosition(20, 5); // sets cursor at column 20 and line 5
int x = Console.CursorLeft; // current position of cursor column
int y = Console.CursorRight; // current position of cursor line
int w = Console.WindowWidth; // current width of window
Console.MoveBufferArea(5, 6, 7, 8, 9, 10); // the text in the zone ((5,6),(12,14)) will move to (9,10)


// LIST; can be in 2 dimension
List<string> days = new List<string>();
days.Add("Monday"); // "Monday"
days.Add("Tuesday"); // "Monday", "Tuesday"
days.Insert(2, "Wednesday"); // "Monday", "Tuesday", "Wednesday"
days.Remove("Wednesday"); // "Monday", "Tuesday"
days.RemoveAt(1); // "Monday"
int length = days.Count; // 1
int index = days.indexOf("Monday"); // 0
// shortened way
List<string> days = new List<string> {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
// write
Console.WriteLine(days[0]); // Monday


// ARRAY; fixed length
string[] days = new string[7];
days[0] = "Monday";
days[1] = "Tuesday";
days[2] = "Wednesday";
days[3] = "Thursday";
days[4] = "Friday";
days[5] = "Saturday";
days[6] = "Sunday";
int length = days.Length; // 7
Array.Sort(days); // sort alpha
// shortened way
string[] days = new string[] {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
// write
Console.WriteLine(days[0]); // Monday


// enum
enum Days
{
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
// write
Console.WriteLine(Days.Monday); // Monday


// conditions
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
// ternary operator
string test = 18 > 20 ? "passed" : "failed";


// switch
string result;
switch(letterGrade)
{
  case "A":
    result = "Excellent";
    break;
  case "B":
    result = "Good";
    break;
  case "C":
    result = "Average";
    break;
  case "D":
    result = "Below Average";
    break;
  default:
    result = "Failing";
    break;
}
return result;


// foreach loop
foreach (int day in days)
{
  Console.WriteLine(day);
}


// for loop
for (int i = 0; i<grades.Count; i++) 
{
  Console.WriteLine(grade);
}


// while loop
while (age > 0)
{
  age -= 1;
  Console.WriteLine(age);
}


// do while loop 
do 
{
  age++;
  Console.WriteLine(age);
} while (age < 50);


// break
for (int i = 0; i<5; i++) 
{
  if (i == 3)
  {
    break;
  }
  Console.WriteLine(i);
} // 0, 1, 2


// continue
for (int i = 0; i<5; i++) 
{
  if (i == 3)
  {
    continue;
  }
  Console.WriteLine(i);
} // 0, 1, 2, 4


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


// Interface
internal interface IThing
{
  // ... no access modifiers allowed (because not needed)
}


// abstract class
 abstract class Thing
{
  // ... abstract for abstract elements
  // ... normal for others but public or protected !
}


// static classes; they can be accessed without instance
public static class static
{
  private static Random random = new Random();
  public static int GetRandom(int max) 
  {
    return random.Next(1, max + 1);
  }
}


// classes
class Something 
{
  public Something() 
  {
    // init
  }
  public virtual void DoSomething() // use virtual only for inherited classes which need override
  {
    // ...
  }
  // rest of code
}
Something smth = new Something(); // creation of an object


// inherited class
class Else : Something // class inherits content and have its own content
{
  public override void DoSomething()
  {
    // override an inherited method (needs visual on mothers method)
    base.DoSomething(); // gather body instructions from inherited method
  }
  public virtual void DoSomethingElse()
  {
    // ...
  }
}
Else smth = new Else();
Else e = smth as Else; // checks if e is an instance of Else; returns null if not; check with "e != null"
smth is Else; // same as above; returns true or false


// Partial classes
partial class Some 
{ 
  // body part 1 
}
partial class Some
{
  // body part 2
}


// Property; kind of class's caracteristics
public string Name 
{
  get // computation or retrieve value and return it; youcan remove it to forbid people to get property
  {
    return _name = value;
  }
  set // gives value; you can remove it to forbid people to set property
  {
    // validations to protect your object
    if(!String.IsNullOrEmpty(value))
    {
      _name = value;
    }
  }
}
private string _name; // field
book.Name = "Rem's"; // Rem's
book.Name = null; // Rem's; or nothing if nothing is passed before
book.Name; // return Rem's


// Shorter property
public string Name { get; set; }


// delegate (events)
public class NameChangedEventArgs : Event Args // object; convention is to use objects in events; colon is used to inherit from class Event Args
{
  public string ExistingName { get; set; }
  public string NewName { get; set; }
}
public delegate void NameChangedDelegate(object sender, NameChangedEventArgs);
public event NameChangedDelegate NameChanged; // event (field)
NameChangedEventArgs args = new NameChangedEventArgs();
args.ExistingName = _name;
args.NewName = value;
NameChanged(this, args);
static void onNameChanged(object sender, NameChangedEventArgs args) 
{
  Console.WriteLine($"Name changing from {args.ExistingName} to {args.NewName}");
}
book.NameChanged += onNameChanged; // use


// access modifiers
private -> access in that class only
protected -> access in that class and derived class
public -> access everywhere
internal -> access in the same assembly
protected internal -> access in the same assembly or derived class


// Math
Math.Max(10, 11); // 11
Math.Min(10, 11); // 10
Math.Sqrt(4); // 2
Math.Pow(2, 2); // 4


// Throwing
if (string.IsNullOrEmpty(value)) 
{
  throw new ApplicationException("Name cannot be null or empty");
}


// try catch (handling)
try 
{
  Console.WriteLine("Enter a name");
  book.Name = Console.ReadLine();
}
catch (ArgumentException ex)
{
  Console.WriteLine(ex.Message);
}
// multiple catch possible; but more specific must come above less specific
finally
{
  // code that will execute anyway
}


// file
using (StreamWriter outputFiles = File.CreateText("grades.txt"))
{
  book.WriteGrades(outputFiles);
  // outputFiles.Close(); not needed with inside using
}




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

// Snippets: double tab to use those
cw -> Console.WriteLine();
ctor -> creates constructor;
testm -> creates testMethod;
prop -> creates property;
for -> for loop;

// format
F5 -> start Debugging
F9 -> breakpoint on current line
F10 -> step over 
F11 -> step into
ctrl+F5 -> start without Debugging
ctrl+k, ctrl+c -> comment
ctrl+K, ctrl+u -> uncomment
ctrl+k, ctrl+d -> reformat the code
