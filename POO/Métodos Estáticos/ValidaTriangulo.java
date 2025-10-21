public class ValidaTriangulo {

    public static boolean ehTriangulo(int x, int y, int z) {
        boolean cond1 = x + y > z;
        boolean cond2 = x + z > y;
        boolean cond3 = y + z > x;
        return cond1 && cond2 && cond3;
    }
}
