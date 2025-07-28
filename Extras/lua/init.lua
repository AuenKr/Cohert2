num = 0

while num < 50 do
	num = num + 1 -- No ++ or += type operators.
end

print(num)

function adder(x)
	return function(y)
		return x + y
	end
end

a1 = adder(10)
a2 = adder(20)
print(a1(30))
print(a2(30))
