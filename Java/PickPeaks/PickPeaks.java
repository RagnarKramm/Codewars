package Java.PickPeaks;

    

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

public class PickPeaks {
    
    public static Map<String,List<Integer>> getPeaks(int[] arr) {
        List<Integer> peaks = new ArrayList<>();
        List<Integer> pos = new ArrayList<>();
        Map<String, Integer> plateauStart = new HashMap<>();
        boolean wasPeak = false;
        boolean isPlateau = false;
        boolean isStart = true;

        for (int i = 0; i < arr.length; i++) {
            if (i < 1) continue;
            int current = arr[i];
            int before = arr[i - 1];

            //When peak is at start of array
            if (before >= current && isStart) {
                continue;
            }else {
                isStart = false;
            }

            //If there is a plateau remember the start of plateau
            if (current == before && !isPlateau) {
                isPlateau = true;
                plateauStart.put("pos", i - 1);
                plateauStart.put("peak", before);
            }

            //If before was a peak and is not a plateau
            if (current < before && !wasPeak && !isPlateau) {
                wasPeak = true;
                peaks.add(arr[i - 1]);
                pos.add(i - 1);
            }else if (current < before && !wasPeak) { //If the peak was a plateau
                wasPeak = true;
                peaks.add(plateauStart.get("peak"));
                pos.add(plateauStart.get("pos"));
                isPlateau = false;
            }

            //Opposite of peak (pit), start searching for new peak
            if (wasPeak && current > before) {
                wasPeak = false;
            }

            //if there is a peak in a plateau
            if (isPlateau && current > before) {
                isPlateau = false;
            }

        }
        return Map.of("pos", pos, "peaks", peaks);
    }
}