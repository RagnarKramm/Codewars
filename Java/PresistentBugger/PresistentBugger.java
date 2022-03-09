package Java.PresistentBugger;

import java.util.List;

class Persist {
  public static int persistence(long n) {
    int counter = 0;
    while (n > 9) {
      String nrStr = n + "";
      List<Integer> ranks = List.of(stringsToInts((nrStr.split(""))));
      n = 1;
      for (Integer rank : ranks) {
        n = n * rank;
      }
      counter++;
    }

    return counter;
  }


  private static Integer[] stringsToInts(String[] strings) {
    Integer[] ans = new Integer[strings.length];
    for (int i = 0; i < strings.length; i++) {
      ans[i] = Integer.parseInt(strings[i]);
    }
    return ans;
  }
}