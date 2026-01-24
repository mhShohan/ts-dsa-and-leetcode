# Solid Principles

The SOLID principles are a set of design principles for writing maintainable and scalable software. They were introduced by Robert C. Martin and are widely used in object-oriented programming. The SOLID principles are:

1. **Single Responsibility Principle (SRP)**: A class should have only one reason to change, meaning it should have only one responsibility or job.
2. **Open/Closed Principle (OCP)**: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means that you should be able to add new functionality without changing existing code.
3. **Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types without altering the correctness of the program. In other words, objects of a derived class should be able to replace objects of the base class without affecting the behavior of the program.
4. **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they do not use. This means that larger interfaces should be split into smaller, more specific ones so that clients only need to know about the methods that are relevant to them.
5. **Dependency Inversion Principle (DIP)**: High-level modules should not depend on low-level modules. Both should depend on abstractions. Additionally, abstractions should not depend on details; details should depend on abstractions. This principle encourages the use of interfaces or abstract classes to decouple high-level and low-level components.

By following the SOLID principles, developers can create software that is easier to maintain, extend, and understand. These principles promote good design practices and help to reduce code complexity and improve code quality.

# In Bangla

SOLID নীতিমালা হল একটি সেট ডিজাইন নীতিমালা যা রক্ষণাবেক্ষণযোগ্য এবং স্কেলযোগ্য সফ্টওয়্যার লেখার জন্য ব্যবহৃত হয়। এগুলি রবার্ট সি. মার্টিন দ্বারা পরিচিত করা হয়েছিল এবং অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ে ব্যাপকভাবে ব্যবহৃত হয়। SOLID নীতিমালা হল:

1. **সিঙ্গল রেসপন্সিবিলিটি প্রিন্সিপল (SRP)**: একটি ক্লাসের শুধুমাত্র একটি কারণ থাকা উচিত পরিবর্তনের জন্য, অর্থাৎ এটি শুধুমাত্র একটি দায়িত্ব বা কাজ থাকা উচিত।
2. **ওপেন/ক্লোজড প্রিন্সিপল (OCP)**: সফ্টওয়্যার সত্তা (ক্লাস, মডিউল, ফাংশন ইত্যাদি) সম্প্রসারণের জন্য খোলা থাকা উচিত কিন্তু পরিবর্তনের জন্য বন্ধ থাকা উচিত। এর অর্থ হল আপনি বিদ্যমান কোড পরিবর্তন না করে নতুন কার্যকারিতা যোগ করতে সক্ষম হওয়া উচিত।
3. **লিসকভ সাবস্টিটিউশন প্রিন্সিপল (LSP)**: সাবটাইপগুলি তাদের বেস টাইপের জন্য প্রতিস্থাপনযোগ্য হতে হবে প্রোগ্রামের সঠিকতা পরিবর্তন না করে। অন্য কথায়, একটি ডেরাইভড ক্লাসের অবজেক্টগুলি বেস ক্লাসের অবজেক্টগুলিকে প্রতিস্থাপন করতে সক্ষম হওয়া উচিত প্রোগ্রামের আচরণ প্রভাবিত না করে।
4. **ইন্টারফেস সেগ্রিগেশন প্রিন্সিপল (ISP)**: ক্লায়েন্টদের এমন ইন্টারফেসগুলির উপর নির্ভর করতে বাধ্য করা উচিত নয় যা তারা ব্যবহার করে না। এর অর্থ হল বড় ইন্টারফেসগুলি ছোট, আরও নির্দিষ্ট ইন্টারফেসে বিভক্ত করা উচিত যাতে ক্লায়েন্টদের শুধুমাত্র সেই পদ্ধতিগুলি সম্পর্কে জানতে হয় যা তাদের জন্য প্রাসঙ্গিক।
5. **ডিপেন্ডেন্সি ইনভার্শন প্রিন্সিপল (DIP)**: উচ্চ-স্তরের মডিউলগুলি নিম্ন-স্তরের মডিউলগুলির উপর নির্ভর করা উচিত নয়। উভয়ই বিমূর্ততার উপর নির্ভর করা উচিত। অতিরিক্তভাবে, বিমূর্ততা বিশদগুলির উপর নির্ভর করা উচিত নয়; বিশদগুলি বিমূর্ততার উপর নির্ভর করা উচিত। এই নীতিটি উচ্চ-স্তরের এবং নিম্ন-স্তরের উপাদানগুলিকে আলাদা করতে ইন্টারফেস বা বিমূর্ত ক্লাসের ব্যবহারকে উৎসাহিত করে।

SOLID নীতিমালা অনুসরণ করে, ডেভেলপাররা এমন সফ্টওয়্যার তৈরি করতে পারে যা রক্ষণাবেক্ষণ, সম্প্রসারণ এবং বোঝা সহজ। এই নীতিগুলি ভাল ডিজাইন অনুশীলন প্রচার করে এবং কোড জটিলতা কমাতে এবং কোডের গুণমান উন্নত করতে সাহায্য করে।

# OOP Study Plan

- Class , Object
- Pillars
  - Encapsulation
  - Abstraction
  - Inheritance
  - Polymorphism
- Abstract Class
- interface
- Overloading vs Overriding
  - method overloading vs constructor overloading
  - method overriding
- composition, aggregation, association
- SOLID principles
- Composition vs Inheritance
- access modifiers - private, protected, public
- difference between abstract class and interface
- explain multilevel inheritance and multiple inheritance
- basic design pattern
  - factory \*
  - singleton \*
  - builder
  - strategy
  - state

### What is OOP?

Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to represent data and behavior. It focuses on the concept of encapsulating data and functions together within objects, allowing for better organization, modularity, and reusability of code. OOP is based on four main principles: encapsulation, abstraction, inheritance, and polymorphism.
