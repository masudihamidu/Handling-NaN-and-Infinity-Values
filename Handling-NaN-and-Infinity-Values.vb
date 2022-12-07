Dim var1, var2 As Double
Dim result As Double

    var1 = 0
    var2 = 0
    result = var1 / var2
        If Double.IsInfinity(result) Then
            If Double.IsPositiveInfinity(result) Then
                MsgBox("Encountered a very large number. Can’t continue")
            Else
                MsgBox("Encountered a very small number. Can’t continue")
            End If
        Else
            If Double.IsNaN(result) Then
                MsgBox("Unexpected error in calculations")
            Else
                MsgBox("The result is:" & result.ToString)
            End If
        End If