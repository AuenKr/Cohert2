#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node()
    {
        this->data = 0;
        this->next = nullptr;
    }
    Node(int val, Node *next)
    {
        this->data = val;
        this->next = next;
    }
};

// Traverse the LL
void traverser(Node *head)
{
    Node *curr = head;
    while (curr != nullptr)
    {
        cout << curr->data << " ";
        curr = curr->next;
    }
    cout << endl;
}

// Add at end
Node *addNodeAtEnd(Node *head, int val)
{
    if (head == nullptr)
    {
        head->data = val;
    }
    Node *curr = head;
    while (curr->next != nullptr)
    {
        curr = curr->next;
    }
    curr->next = new Node(val, nullptr);
    return head;
}

// Add Node at beginning
Node *addNodeAtBeginning(Node *head, int val)
{
    Node *newHead = new Node(val, nullptr);
    newHead->next = head;
    return newHead;
}

// Remove from beginning
Node *removeNodeAtBeginning(Node *head)
{
    if (head == nullptr)
    {
        return head;
    }
    Node *temp = head;
    head = head->next;
    delete (temp);
    return head;
}

// Remove from the end
Node *removeNodeAtEnd(Node *head)
{
    if (head == nullptr)
        return head;
    if (head->next == nullptr)
    {
        delete (head);
        return nullptr;
    }
    Node *curr = head;
    while (curr->next->next != nullptr)
        curr = curr->next;
    delete (curr->next);
    return head;
}

// Delete Kth node 
void deleteKthNode(Node *head, int K) {
    int index=0;
    Node *curr=head ;
    while(index!=K && curr->next->next!=nullptr){

    }

}

int main()
{
    Node *head = new Node(8, nullptr);
    head = addNodeAtEnd(head, 4);
    head = addNodeAtEnd(head, 6);
    head = addNodeAtEnd(head, 2);

    traverser(head);
    return 0;
}