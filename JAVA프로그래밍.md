#1강

***java VM***
  - java 프로그램의 실행 환경을 제공하는 가상 기계

***main() {...}***
- **public static void main(String[] args)**

***추상화***
  - 구체적인 모든 사실이 아니라 전형적이고 필요한 부분만을 발췌하여 사물을 이해 표현.

***클래스***
  - 객체를 만들기 위한 모형 또는 틀.
  - 공통적인 특징을 가지는 객체들을 추상화하기 위한 수단.
  - 객체의 상태는 필드(데이터), 행위는 메소드로 구현.
  - 객체는 특정 클래스의 인스턴스

#2강

***지역 변수***
 - 초기값을 지정한 후 사용해야 함

***기본 자료형***
  - 문자. char. 2
  - 논리. boolean. 1
  - 정수. byte,short,int,long. 1,2,4,8
  - 실수. float,double. 4,8

***상수***
  - final. 리터럴(실제 데이터 값) 또는 값이 변하지 않는 변수

***실수형 리터럴***
  - 소수점 숫자. float은 f나 F. 나머지는 double형

***문자형 리터럴***
  - 1개의 문자표현, 16비트 UNICODE로 인코딩. \u

***static***
  - **같은 유형(동일 클래스)의 객체들 사이에서 공유하는 데이터 필드를 정의할 때 사용**

#3강

***배열의 선언***
  - 선언할 때는 크기를 지정할 수 없음.
  - int[] a; int b[]; int[][] c; int d[][]; int[] e[];
  - inf f[10]; //오류

***배열의 초기화***
  - 선언과 동시에 중괄호를 이용하여 초기값을 지정
  - int a[] = {1,2,3,4,5} 선언과 동시에 초기화
  - int a[][] = {{1,2,3}, {4,5,6}}
  - **int a[]; a = {1,2,3} // 오류**
  - **int[5] a = {1,2,3,4,5}; // 오류 선언 시 크기 지정 안됨**

***배열의 생성***
  - int a[] = new int[3];
  - int a[]; a = new int[10];
  - int a[][] = new int[3][2];

***Scanner 클래스***
  - 키보드나 파일로부터 다양한 자료를 입력 받을 때 사용
  - Scanner s = new Scanner(System.in); String name = s.next();
  - Scanner s = new Scanner(System.in); while(s.hasNextInt()) s.nextInt();

***클래스 접근 제어자***
  - 생락, public, protected, private 또는 abstract, final

***클래스 정의 문법***
  - [접근제어자] class 클래스명 [extends 부모클래스명][implements 인터페이스명]

***클래스 정의***
  - 데이터 필드와 메소드를 정의
  - 객체의 상태는 데이터 필드로, 행위는 메소드로 구현
  - 메소드는 저장된 데이터를 이용해 기능을 수행

***접근 제어자가 생략된 class***
  - 같은 패키지에 있는 다른 클래스에서 사용 가능

***public class***
  - 모든 클래스에 사용 가능

***private***
  - 같은 클래스에서만 사용 가능

***protected***
  - 같은 패키지와 자식 클래스에서 사용 가능

***static 메소드***
  - 멀티 스레딩에서 동기화가 필요한 메소드

***final 메소드***
  - 서브 클래스에서 오버라이딩할 수 없는 메소드

#4강

***생성자***
  - 객체가 생성될 때 자동으로 실행되는 메소드
  - Circle c = new Circle();
  - **c 는 참조형 변수. Circle 클래스의 생성자가 실행된다.**
  - **객체를 생성(메모리 할당). 생성자 호출 되면서 객체의 참조값을 변수에 대입**   
  - new로 객체를 생성할 때 자동 호출됨
  - 클래스 이름과 같음. 반환형을 선언하지 않음

***기본 생성자***
  - 인자가 없는 생성자. 디폴트 생성자(default construcor)
  - 클래스 정의에 생성자 정의가 없으면 자동으로 만들어 줌. public Circle(){}
  - 생성자 몸체의 첫 줄에 부모 생성자의 명시적 호출이 없다면 다음 코드가 자동으로 들어감
  - super(); 부모 클래스의 기본 생성자를 호출. 부모 클래스에서 기본 생성자의 존재 확인 필요.

***static 필드***
  - 정적 필드 or 클래스 필드.

***static 메소드***
  - 정적 메소드 or 클래스 메소드. 메소드 몸체에서 this를 사용할 수 없음

***메소드 오버로딩***
  - 같은 이름의 메소드를 한 클래스에서 여러 개 정의할 수 있음. 인자의 개수나 자료형 다르게

***상속***
  - 기존 클래스(부모)를 사용하여 새로운 클래스(자식)를 정의
  - 부모 클래스와 자식 클래스 간의 관계
  - 자식 클래스가 부모 클래스의 필드와 메소드를 상송 받음
  - 기존 클래스 상속 받을 때 extends 사용
  - **클래스의 상속은 단일 상속만 가능. 인터페이스 상속은 다중 상속 가능**
  - **class A extends b {} (O), class A extends b,c {} (X)**
  - **interface X extends Y, Z {} (O)**

***메소드 오버라이딩***
  - 부모로부터 상속받은 메소드의 몸체를 자식 클래스에서 재정의 하는 것
  - 부모와 자식에서 같은 이름의 메소드가 다른 기능을 수행하게 됨

***this***
  - 메소드 호출 시, 숨은 인자로 this가 메소드에 전달됨
  - this는 현재 객체에 대한 참조값을 가지고 있어 c1.diplay()과 c2.diplay()의 결과가 다른 이유
  - 인스턴스 메소드나 생성자에서만 사용 가능
  - this(). 같은 클래스의 다른 생성자를 호출하는 것

***super***
  - this와 같으나 자료형이 부모 클래스 유형임
  - 자식 클래스의 인스턴스 메소드나 생성자에서 사용됨
  - 부모 클래스에서 오버로딩 당한 메소드를 호출하거나 상속되었으나 감춰진 필드에 접근할 때 필요함
  - super.메소드(인자), super.필드
  - super(). 부모클래스의 생성자를 호출하는 것

#5강

***추상메소드***
  - 메소드 선언에 abstract 키워드 사용.
  - **abstract 메소드는 몸체의 구현이 없이 선언된 메소드. 자식 클래스에 상속될 때 몸체의 구현이 필요함**
  - abstract public double getArea();

***추상클래스***
  - 클래스 정의에 abstract 키워드 사용.
  - **객체 생성을 할 수 없음**
  - abstract public class Shape {}
  - 의미적으로 유사한 클래스를 묶고자 할 때 사용
  - 불완전한 클래스
  - 추상 클래스는 자식 클래스로 상송되어 사용됨

***인터페이스***
  - 메소드는 기본적으로 public abstract 임
  - **데이터 필드는 항상(생략가능) public static final 임**
  - 의미적으로는 관련이 없으나 기능적으로 유사한 클래스들을 묶을 때 인터페이스를 사용할 수 있음
  - 자식 인터페이스가 부모 인터페이스를 상속받는 경우 extends를 사용
  - 자식 클래스가 부모 인터페이스를 상속받는 경우 implements를 사용

***추상클래스, 인터페이스, 클래스의 형변환***
  - 상위 유형의 변수는 하위 객체의 참조값을 가질 수 있음

***형 변환***
  - 상속 관계에 있는 클래스 간에는 타입 변환이 가능함

***열거형***
  - 미리 정의된 상수값을 만들기 위한 자료형. enum 을 사용하여 정의 Enum Day {...}

***익명 클래스***
  - 일회성으로 1개의 객체를 생성하기 위한 클래스
  - 클래스 정의와 동시에 객체를 생성할 수 있음
  - CSuper sub = new CSuper() { public int b= 20; ...};

#6강

***제네릭***
  - 클래스, 인터페이스, 메소드를 정의할 때 타입 매개변수(타입 파라미터)를 선언하고 사용할 수 있음
  - 여러 유형에 걸쳐 동작하는 일반화된 클래스나 메소드를 정의할 수 있음
  - 자료형을 한정함으로써 컴파일 시점에 자료형 검사가 가능
  - 캐스트(형변환) 연산자의 사용이 불필요
  - **형변환 하지 않아 컴파일 오류**
```java
List list = new ArrayList();
list.add("Hello");
String s1 = list.get(0); // 오류
```

***제네릭클래스***
  - 의미가 명확하면 생성자 호출 시, 괄호만 사용할 수 있음. Data<String> d = new Data<>();

***Raw타입***
  - 타입 매개변수 없이 사용되는 제네릭 타입.
  - 자료형을 Object로 처리함
  - Data d = new Data("hello");
  - 이때 Data는 제네릭 타입 Data<T> 의 raw 타입

***제네릭 메소드***
  - 자료형을 매개변수로 가지는 메소드
  - 하나의 메소드 정의로 여러 유형의 데이터를 처리할 때 유용함

***제네릭의 타입 제한***
  - 자료형을 매개변수화하여 클래스/인터페이스/메소드를 정의할 때 적용 가능한 자료형에 제한을 두는 것
  - <T extends Number>와 같이 하면 T를 상한으로 정할 수 있음.
  - T에 주어지는 자료형은 Number의 서브 클래스라야 함
  - Data<T extends Number>  >>> Data<Integer> data
  - 상속 관계가 있어야 상위/하위 자료형의 관계가 존재함
  - Integer나 Double은 Number의 자식클래스
  - FormattedData<T> extends Data<T> // 상속관계
  - Data<Number> d = new Data<Integer>(); // 컴파일 오류
  - Data<Integer> d = new FormattedData<Integer>();
  - 기본 자료형은 타입 매개변수로 지정할 수 없음. Data<int> d = new Data<>(); // 오류
  - 타입 매개변수로 객체 생성을 할 수 없음. class Data <T>{private T ti = new T();} // 오류
  - 제네릭 타입의 배열을 선언할 수 없음. Data<Integer>[] arrayOfData; // 오류

***람다식***
  - 인터페이스를 구현하는 익명 클래스의 객체 생성 부분을 수식화 한 것
  - 메소드 매개변수의 괄호, 화살표, 메소드 몸체로 표현
  - 인터페이스 객체변수 = (매개변수목록) -> {실행문목록}
  - Runnable runnable = () -> {...};
  - 1개의 추상 메소드를 포함하는 인터페이스를 함수적 인터페이스라 함
  - 람다식의 결과 타입을 타깃 타입이라고 함
  - 자료형을 생략하고 변수 이름만 사용 가능
  - 패키지 java.util.function 에서 표준 함수적 인터페이스가 제네릭 인터페이스로 제공됨
  - 함수적 인터페이스를 구현하는 클래스를 정의할 때, 람다식이 효율적

#7강

***FileInputStream***
  ```java
  throws FileNotFoundException
  ```

***InputStream(또는 Reader) 클래스의 메소드***
  ```java
  read() throws IOException
  ```

#8강

***Object클래스와 주요메소드***
  - clone() 객체를 복제하여 반환
  - hashCode() 객체를 식별하는 정수값을 반환
  - toString() 객체의 문자열 표현을 반환. 클래스이름@16진수해시코드로 표현. 자식클래스에서 재정의할 수 있음
  - equals(Object obj) 두 변주의 참조값이 같을 때 true를 반환. 자식 클래스에서 재정의 할 수 있음

***String 클래스***
  - String 객체는 내용이 변하지 않는(immutable) 상수 객체

***문자열 비교 메소드***
  - compareTo(String anotherString) 같으면 0을 리턴, 다르면 0이 아닌 정수값을 리턴
  - compareToIgnoreCase(String anotherString)
  - equals(Object anObject) 문자열이 같으면 true를 리턴, 다르면 false
  - equalsIgnoreCase(String anotherString)

***문자열의 검색 메소드***
  - indexOf(String str) 처음 위치부터 문자열을 찾아 처음 등장하는 위치를 리턴. 없으면 -1을 리턴
  - lastIndexOf(String st) 마지막 위치부터 앞 방향으로 찾음

***문자열 추출 메소드***
  - charAt(int index) index 위치에 있는 문자를 리턴
  - substring(int index) index 위치부터 마지막까지의 문자열을 리턴
  - substring(int index, int endIndex) index 위치부터 endIndex-1 까지의 문자열을 리턴

***문자열 변환 메소드***
  - replace(char a, char b) a문자를 b 문자로 변환하여 리턴
  - trim() 문자열 앞과 뒤에 나오는 화이트 스페이스 문자를 제거하여 리턴
  - toUpperCase()
  - toLowerCase()
  - concat(String str) 두 문자열을 연결
  - String.valueOf() 다른 자료형을 문자열로 변환하는 메소드
  - String.valueOf(5>3) true 문자열
  - String.valueOf({'j','a','v','a'}) java 문자열
  - startsWith(String prefix) prefix로 시작하면 true를 리턴
  - endsWith(String suffix) suffix로 끝나면 true를 리턴

***StringBuffer***
  - 내부적으로 문자열을 저장하기 위해 크기가 조절되는 버퍼를 사용함
  - append(char c) 인자를 String 표현으로 바꾸고 원 문자열 끝에 추가하여 반환함
  - delete(int a, int b) a위치에서 b-1까지의 문자열 삭제
  - insert(int a, String b) a위치부터 b를 삽입
  - replace(int a, int b, String c) a위치부터 b-1까지의 문자열을 c로 교체
  - reverse() 문자열을 역순으로 변경

***String 클래스 문제점***
  - String은 immutable 클래스. 기존 String 객체는 놔둔 채 새로운 String 객체가 계속 생성됨

***Number 클래스***
  - Byte, Short, Integer, Long, Float, Double의 추상 부모 클래스

***Integer.parseInt, Long.parseLong***
  - String 을 int(long) 형으로 변환

***Integer.toString(4), Long.toString(4)***
  - int(long) 형을 Strin g형으로 변환

***박싱***
  - 기본형 데이터를 포장 클래스의 객체로 변환하는 것. Double radius = 2.59 // 자동 boxing **Integer i = new Integer(10)**

***언박싱***
  - 포장 클래스에서 기본형Value() 메소드를 사용 - double r = radius; //자동 unboxing, syso(new Integer(3)%2); //자동 unboxing

***System클래스***
  - 모든 멤버는 static, 사용 시 객체를 생성할 필요 없음

#9강

***Path 인터페이스***
  - **java.io.File 클래스를 대신함. 파일이나 디렉터리에 해당하는 경로를 표현함**
  - **Path path = Paths.get('경로');**

***FileSystem***
  - 파일 시스템에 대한 인터페이스를 제공

***FileStore***
  - 파티션(또는 볼륨)을 표현

***File 클래스***
  - static 메소드를 제공함. Path객체를 인자로 가지고 작업함

***FileChannel 클래스***
  - 파일 관련 입출력 스트림을 대체. 파일에 대한 읽기와 쓰기 모두 제공

#10강

***바이트 스트림***
  - **byte 단위로 데이터를 다룸. xxxInputStream과 xxxOutputStream**
  - InputStream. read()
  - OutputStream. write()

***캐릭터 스트림***
  - **char(문자) 단위로 데이터를 다룸. xxxReader과 xxxWriter (FileReader, FileWriter)**
  - Reader. read()
  - Writer. wriet()

***File클래스***
  - 파일이나 디렉터리를 표현. 상대 또는 절대 경로를 가짐. 입출력 메소드는 제공되지 않음
**RandomAccessFile - 파일의 임의 위치에서 읽기/쓰기가 가능. 파일 포인터가 위치 가리킴**

***FileOutputStream 예제***
```java
  File inFile, outFile;
  inFile = new File("경로");
  outFile = new File("경로");
  InputStream is = new FileInputStream(inFile);
  OutputStream os = new FileOutputStream(outFile);
  int nData = is.read();
  while(nData != -1) { os.write(nData); nData = is.read();}
  is.close();
  out.close();
```

***LineNumberReader클래스***
  - 텍스트 파일을 라인 단위로 읽어 들이는 메소드 제공

***InputStreamReader클래스***
  - 바이트 입력 스트림을 캐릭터 입력 스트림으로 바꾸기 위한 클래스.
  - int read() 1개 문자를 읽어 리턴함
  - InputStreamReader isr = new InputStreamReader(System.in);
  - while((i=isr.read()) != '끝') { syso((char) i);}

***Reader***
  - **문자 단위 입력 스트림의 최상위 클래스**

***BufferedInputStream***
  - **버퍼링 기능을 제공하는 바이트 단위 입력용 처리 스트림**

***PrintWriter***
  - **문자 단위 처리 스트림으로 포맷된 형식으로 문자열을 출력하는 기능을 제공**

#11강

***Java Collections Framework***

***JCF의 인터페이스***
  - **Set 순서는 의미가 없으며 중복을 허용하지 않는 자료구조**
  - List 중복을 허용하고 순서에 의미가 있는 자료구조
  - Queue List와 유사하나 원소의 삽입/삭제가 FIFO 방식
  - **Map 원소가 <key, value> 의 형태이며 키는 유일해야 함**
  - Set HashSet(해싱) LinkedHashSet(해싱+연결리스트) SortedSet TreeSet(트리)
  - List ArrayList,Vector(Stack)(배열) LinkedList(연결리스트)
  - Queue LinkedList(연결리스트)
  - Map HashMap(해싱) LinkedHashMap(해싱+연결리스트) SortedMap TreeMap(트리)
  - Set<Integer> set = new HashSet<>();
  - List<Integer> list = new ArrayList<>();
  - List<Integer> list = new LinkedList<>();
  - Queue<Integer> queue = new LinkedList<>();
  - Map<String, Integer> map = new HashMap<>();

***ArrayList***
  - **같은 자료가 중복될 수 있으며, 입력된 순서대로 관리됨. 특정위치의 자료를 참조할 수 있음**
```java
Iterator<String> it = list.iterator(); while(it.hasNext()) syso(it.next());
LinkedList<String> queue = new LinkedList<String>();
queue.offer("one"); queue.offer("two"); queue.offer("three"); queue.offer("four");
String s = queue.poll(); while (s != null) { syso(s); s = queue.poll();}
```

#12강

***프로세스***
  - 실행중인 프로그램

***스레드***
  - 실행중인 프로그램 내에 존재하는 소규모 실행 흐름

***멀티스레드***
  - 여러 스레드가 동시에 독립적으로 실행되고 종료됨. 각 스레드는 정해진 순서 없이 독립적으로 실행됨

***멀티스레드***
  - **한 스레드가 공유된 객체의 synchronized 메소드를 실행 중이라면 다른 스레드가 동일 객체에 접근할 수 없다**

***Thread 클래스 상속***
```java
class MyThread1 extends Thread {
  public void run() {
    for(int i = 0; i < 10; i++)
      syso(getName());
  }
}
public class ThreadTest1{
  public static void main(String args[]){
    Thread t1 = new MyThread1(); t1.start();
    Thread t2 = new MyThread1(); t2.start();
    syso("main");
  }
}
```
***Runnable 인터페이스를 구현***
```java
class MyThread2 implements Runnable{
  public void run() {
    for(int i = 0; i < 10; i++)
      syso(Thread.currentThread().getName());
  }
}
public class ThreadTest2{
  public static void main(String[] args){
    Thread t1 = new Thread(new MyThread2(), "thd0"); t1.start();
    Thread t2 = new Thread(new MyThread2(), "thd1"); t2.start();
    syso("main");
  }
}
```

***setPriority(int newPriority)***
  - 스레드의 우선순의를 변경

***sleep(long millis)***
  - 현재 실행 중인 스레드가 정해진 시간 동안 실행을 멈추고 Not Running 상태로 들어감

***yield()***
  - **CPU를 다른 스레드에게 양보하는 것. 현재 실행중인 스레드가 잠시 실행을 멈추고 Runnable 상태로 들어감**

***join()***
  - 스레드가 종료될 때까지 기다림

***interrupt()***
  - 스레드를 인터럽트시킴

***wait()***
  -객체를 처리 중인 스레드를 정해진 시간 동안 중지시킴

***notify()***
  - wait()를 호출하여 중단된 스레드를 깨워줌

***스레드 동기화***
  - 서로 다른 스레드들이 공유 자원을 다룰 때, 일관성을 유지하도록 하는 것.

***synchronized***
  - public synchronized void increment(), synchronized(this)

#13강

***배치관리자***
  - 배치 관리 방법을 제공하는 클래스

***BorderLayout***
  - 중앙, 동, 서, 남, 북에 배치. 중앙이 크게 설정. 나머지 최소한. Frame, Window, Dialog의 기본 배치 배치관리자

***FlowLayout***
  - **한 행에 순서대로 수평으로 배치(모자라면 다음행). 선호 크기로 배치. !!Panel의 기본 배치 관리자!!**

***GridLayout***
  - **바둑판 모양으로, 격자 형식으로 배치. 컴포넌트 크기가 동일함**

***CardLayout***
  - 한 번에 한 장의 카드(컴포넌트)를 보여줌

#14강

***이벤트***
  - 이벤트 처리를 위해선 이벤트 소스에 리스너 객체를 등록해야함
  - **하나의 이벤트 소스에는 여러 다른 이벤트가 발생 가능**
  - 이벤트 클래스에 대응되는 리스터 인터페이스가 존재
  - 2개 이상의 추상 메소드를 가지는 리스너 인터페이스를 위해 어댑터 클래스가 존재

***이벤트 등록***
  - **aButton.addActionListener(new A()); A는 ActionListener를 구현**
  - **implements ActionListener**
  - **implements WindowListener 여러개**
  - **extends WindowAdapter 1개 windowClosing**

***이벤트 리스너 등록***
  ```java
  class MyFrame extends Frame{
    public MyFrame(String title){
      this.addWindowListener(new MyListener());
    }
  }
  ```

***이벤트 리스너 구현***
  ```java
  class MyListener implements WindowListener{
    public void windowClosing(WindowEvent ev){
      system.exit(0)
    }
  }
  ```

***어댑터를 상속***
  ```java
  class MyListener extends WindowAdapter{
    public void windowClosing(WindowEvent ev){
      system.exit(0)
    }
  }
  ```

#15강

```java
Connection conn = DriverManager.getConnection(url, user, pswd);
```

***select***
  ```java
  Statement stmt = conn.createStatement();
  ResultSet rs = stmt.executeQuery("select");
  rs.close();
  stmt.close();
  conn.close();
  ```

***insert***
  ```java
  Statement stmt = conn.createStatement();
  stmt.executeUpdate("insert");
  stmt.close();
  conn.close();
  ```

```java
abstract class GraphicObject {
  int x, y;
  abstract void draw();
}
```

***애플릿***
  - **웹 브라우저에서 실행되는 특별한 Java 프로그램. main() 함수를 가질 필요가 없는 Java프로그램**


End
