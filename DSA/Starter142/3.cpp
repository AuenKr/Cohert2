#include <bits/stdc++.h>
using namespace std;

void solve();

int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t --)
	    solve();
}

void solve()
{
    int n;
    cin>>n;
    vector<int> arr(n);
    for(int i = 0; i < n; i ++)
        cin>>arr[i];
        
    for(int i = 0; i < n; i ++)
        cout<<arr[i];
}

